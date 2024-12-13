// Kalkulator Sederhana menggunakan Node.js

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Selamat datang di Kalkulator Sederhana!");
console.log("Pilih operasi:");
console.log("1. Penjumlahan");
console.log("2. Pengurangan");

rl.question("Masukkan pilihan (1/2): ", (operasi) => {
    rl.question("Masukkan angka pertama: ", (angka1) => {
        rl.question("Masukkan angka kedua: ", (angka2) => {
            const num1 = parseFloat(angka1);
            const num2 = parseFloat(angka2);

            if (isNaN(num1) || isNaN(num2)) {
                console.log("Masukkan angka yang valid.");
            } else {
                switch (operasi) {
                    case "1":
                        console.log(`Hasil penjumlahan ${num1} + ${num2} = ${num1 + num2}`);
                        break;
                    case "2":
                        console.log(`Hasil pengurangan ${num1} - ${num2} = ${num1 - num2}`);
                        break;
                    default:
                        console.log("Pilihan operasi tidak valid. Silakan coba lagi.");
                }
            }

            rl.close();
        });
    });
});

