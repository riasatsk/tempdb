// deno-lint-ignore-file no-explicit-any
/**
 * @class TempDB
 * @classdesc A temporary in-memory key-value store with automatic invalidation.
 */
export default class TempDB {
  /**
   * @private
   * @type {Map<string, { data: any; time: number }>}
   */
  map: Map<string, { data: any; time: number }>;

  /**
   * Creates an instance of TempDB.
   * @param {number} lifeTime - The lifetime of each entry in minutes.
   * @param {number} [invalidationTime=1] - The interval for invalidation checks in minutes.
   */
  constructor(lifeTime: number, invalidationTime: number = 1) {
    this.map = new Map();
    setInterval(() => {
      this.map.forEach((value, key) =>
        Date.now() - value.time > lifeTime * 60 * 1000
          ? this.map.delete(key)
          : ""
      );
    }, invalidationTime * 60 * 1000);
  }

  /**
   * Sets a key-value pair in the TempDB with the current timestamp.
   * @param {string} key - The key for the entry.
   * @param {any} value - The value to be stored.
   */
  set(key: string, value: any) {
    this.map.set(key, { data: value, time: Date.now() });
  }

  /**
   * Retrieves a value from the TempDB by key.
   * @param {string} key - The key for the entry to retrieve.
   * @returns {{ data: any; time: number } | undefined} The value associated with the key, or undefined if not found.
   */
  get(key: string): { data: any; time: number } | undefined {
    return this.map.get(key)?.data;
  }
}

/**
 * Thank you for using TempDB! We hope it brings you convenience and joy in your coding journey.
 * Remember to take breaks, stay hydrated, and keep up the great work. Happy coding! ❤️
 */
