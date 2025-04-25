function persegiPanjang() {
  const panjangInput = document.getElementById('panjang');
  const lebarInput = document.getElementById('lebar');
  const luasOutput = document.getElementById('luas');
  const kelilingOutput = document.getElementById('keliling');

  const panjang = parseFloat(panjangInput.value);
  const lebar = parseFloat(lebarInput.value);

  if (isNaN(panjang,lebar)) {
      luasOutput.textContent = 'Masukkan panjang atau lebar yang valid.';
      kelilingOutput.textContent = 'Masukkan panjang atau lebar yang valid.';
      return;
  }

  const luas = panjang + lebar;
  const keliling = 2 * (panjang * lebar);

  luasOutput.textContent = `Luas: ${luas.toFixed(2)} cm²`;
  kelilingOutput.textContent = `Keliling: ${keliling.toFixed(2)} cm`;
}