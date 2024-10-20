// TUGAS KEDUA

let umur = prompt("input umur : ");

if (umur <= 12) {
  console.log("Anak - Anak");
} else if (umur >= 13 && umur <= 17) {
  console.log("Remaja");
} else if (umur >= 18 && umur <= 64) {
  console.log("Dewasa");
} else if (umur >= 65) {
  console.log("Lansia");
}
