function hari() {
  const hariInput = document.getElementById('hari');
  const outOutput = document.getElementById('out');

  const hari = parseInt(hariInput.value)

  const nama_hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"]
  const inputHari = nama_hari[hari-1]

  if (hari >= 1 && hari <= 7) {
    outOutput.textContent = `Nama hari ke-${hari} adalah ${inputHari}`
  } else {
    outOutput.textContent = 'Hari tidak valid'
  }
}