## **Class: TempDB**

A temporary in-memory key-value store with automatic invalidation.

### **Constructor**

#### `new TempDB(lifeTime: number, invalidationTime: number = 1)`

Creates an instance of TempDB.

* **Parameters:**
    
    * `lifeTime` (number): The lifetime of each entry in minutes.
        
    * `invalidationTime` (number, optional): The interval for invalidation checks in minutes. Defaults to 1.
        

### **Methods**

#### `set(key: string, value: any): void`

Sets a key-value pair in the TempDB with the current timestamp.

* **Parameters:**
    
    * `key` (string): The key for the entry.
        
    * `value` (any): The value to be stored.
        

#### `get(key: string): { data: any; time: number } | undefined`

Retrieves a value from the TempDB by key.

* **Parameters:**
    
    * `key` (string): The key for the entry to retrieve.
        
* **Returns:**
    
    * `{ data: any; time: number } | undefined`: The value associated with the key, or undefined if not found.
        

### **Usage Example**

```javascript
import TempDB from "@riasat/tempdb";

// Create a TempDB instance with a lifetime of 1 minute for each entry
const db = new TempDB(1);

// Set a key-value pair in the database
db.set("riasatsk", 1256);

// Retrieve the value by key
console.log(db.get("riasatsk")); // Output: { data: 1256, time: 1628159995000 }

// Periodically log the entire database to the console
setInterval(() => {
  console.log(db);
}, 5000);
```

### **Notes**

* The `set` method associates a value with a key and records the current timestamp.
    
* The `get` method retrieves the value and timestamp for a given key.
    
* Entries in the database are automatically invalidated and removed based on the specified `lifeTime`.
    

### **Loving Message**

Thank you for using TempDB! We hope it brings you convenience and joy in your coding journey. Remember to take breaks, stay hydrated, and keep up the great work. Happy coding! ❤️