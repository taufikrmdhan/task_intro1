// Built in function 
// 1. filter adalah method array di JavaScript yang berfungsi untuk mencari semua elemen di dalam array yang sesuai dengan kriteria tertentu.
const age = [32, 33, 16, 40];

console.log("Contoh filter");
console.log(age.filter(ages => ages > 32));
// 2. Push adalah method array di JavaScript yang berfungsi untuk menambahkan elemen baru ke dalam array.
console.log("Contoh push");
console.log(age.push(21));
console.log(age)
// 3. Pop adalah method array di JavaScript yang berfungsi untuk menghapus elemen terakhir dari array.
console.log("Contoh pop");
age.pop();
console.log(age);
// 4. Reduce adalah method array di JavaScript yang berfungsi untuk menjumlahkan/menghitung semua elemen dalam array.
console.log("Contoh reduce");
console.log(age.reduce((total, curr) => total + curr));
console.log(age.reduce((total, curr) => total - curr));
