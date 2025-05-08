const quotes = [
  "Hidup ini 10% apa yang terjadi padamu dan 90% bagaimana kamu menyikapinya. – Charles R. Swindoll",
  "Kamu tidak harus lebih baik dari orang lain, kamu hanya harus lebih baik dari dirimu yang kemarin. – Unknown",
  "Jika kamu bisa memimpikannya, kamu bisa mewujudkannya. – Walt Disney",
  "Jangan takut gagal, karena kegagalan adalah langkah pertama menuju kesuksesan. – Unknown",
  "Kesuksesan tidak datang kepada kita, kita yang harus mencapainya. – Unknown",
  "Apa yang kita pikirkan, kita akan menjadi. – Buddha",
  "Keberhasilan adalah kemampuan untuk pergi dari kegagalan ke kegagalan tanpa kehilangan semangat. – Winston Churchill",
  "Orang yang tidak pernah membuat kesalahan adalah orang yang tidak pernah mencoba sesuatu yang baru. – Albert Einstein",
  "Jangan biarkan apa yang tidak bisa kamu lakukan mengganggu apa yang bisa kamu lakukan. – John Wooden",
  "Kunci untuk sukses adalah memulai sebelum kamu siap. – Marie Forleo"
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById('quoteDisplay').textContent = `"${quote}"`;
}
