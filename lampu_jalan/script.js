function cekLampu() {
  const warna = document.getElementById('warna').value.toLowerCase();
  const hasil = document.getElementById('hasil');

  if (warna === 'merah') {
      hasil.textContent = 'Silahkan berhenti';
  } else if (warna === 'kuning') {
      hasil.textContent = 'Berhati-hati';
  } else if (warna === 'hijau') {
      hasil.textContent = 'Silahkan maju';
  } else {
      hasil.textContent = 'Ini bukan warna lampu lalu lintas';
  }
}