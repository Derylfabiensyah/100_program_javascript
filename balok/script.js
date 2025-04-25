function hitungBalok() {
  const panjangInput = document.getElementById('panjang');
  const lebarInput = document.getElementById('lebar');
  const tinggiInput = document.getElementById('tinggi');
  const luasOutput = document.getElementById('luas');
  const volumeOutput = document.getElementById('volume');

  const panjang = parseFloat(panjangInput.value);
  const lebar = parseFloat(lebarInput.value);
  const tinggi = parseFloat(tinggiInput.value);

  if (isNaN(panjang,lebar)) {
      luasOutput.textContent = 'Masukkan panjang atau lebar yang valid.';
      volumeOutput.textContent = '';
      return;
  }

  const luas = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);
  const volume = panjang * lebar * tinggi;

  luasOutput.textContent = `Luas : ${luas.toFixed(2)} cm²`;
  volumeOutput.textContent = `Volume : ${volume.toFixed(2)} cm`;
}