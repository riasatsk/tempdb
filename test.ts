import TempDB from "./src/main.ts";

const db = new TempDB(1);

db.set("riasatsk", 1256);

console.log(db.get("riasatsk"));

setInterval(() => {
  console.log(db);
}, 5000);
