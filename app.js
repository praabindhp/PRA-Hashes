const { pra256, pra512 } = require("./index");

const hash256 = pra256("Praabindh Pradeep");
const hash512 = pra512("Praabindh Pradeep");

console.log("PRA-256 Hash:", hash256);
console.log("PRA-512 Hash:", hash512);

// PRA-256 Hash: e29f1497665fdda209e578f6811adcee92a33e0c10635bee18b3166b9d7dc599
// PRA-512 Hash: f38612b9b0ce5efc0288f457c5676f905b003762524fe4c00838fcb9a1dae5007eabb9b6bf3fa0acb85517d89ed820114d9de38670c1126b7f54a4cde16015df
