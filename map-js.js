// 1. Init object map
const userMap = new Map();
// 2. Insert Data (userMap.set(key, value))
userMap.set("username", "kangdian");
userMap.set("role", "Backend Developer");
userMap.set(101, "IT"); // Key berupa Number, Value berupa string
// Key berupa Object
const serverConfig = { host: "10.0.1.5", port: 5432 };
userMap.set(serverConfig, "OracleDB");
// 3. Membaca Data (userMap.get(key))
console.log(userMap.get("username")); // Output: kangdian
console.log(userMap.get(101)); // Output: IT
console.log(userMap.get(serverConfig)); // Output: OracleDB
// 4. Cek apakah Data punya (userMap.has(key))
console.log(userMap.has("role")); // Output: true
console.log(userMap.has("password")); // Output: false
// 5. Untuk cek length dari Map
console.log(userMap.size); // Output: 4
// 6. Hapus key username (userMap.delete(key))
userMap.delete("username");
// 7. Looping/Iterasi untuk Map
// Data map d order/diurut berdasarkan waktu insert 
userMap.forEach((value, key) => {
 console.log(`Key: ${key} -> Value: ${value}`);
});