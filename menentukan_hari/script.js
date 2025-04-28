function bulan() {
  const bulanInput = document.getElementById('bulan').value.toLowerCase();
  const outOutput = document.getElementById('out');

  const menuBulan = {
    "januari": 31,
    "februari": 29,
    "maret": 31,
    "april": 30,
    "mei": 31,
    "juni": 30,
    "juli": 31,
    "agustus": 31,
    "september": 30,
    "oktober": 31,
    "november": 30,
    "desember": 31
  };

  const hari = menuBulan[bulanInput];

  if (hari) {
    outOutput.textContent = `${bulanInput} yang Anda pilih punya ${hari} hari.`;
} else {
    outOutput.textContent = "Bulan tidak ditemukan. Silakan coba lagi.";
}
}