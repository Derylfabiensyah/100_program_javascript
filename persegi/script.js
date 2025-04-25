function hitungPersegi() {
  const sisiInput = document.getElementById('sisi');
  const luasOutput = document.getElementById('luas');
  const kelilingOutput = document.getElementById('keliling');

  const sisi = parseFloat(sisiInput.value);

  if (isNaN(sisi)) {
      luasOutput.textContent = 'Masukkan sisi yang valid.';
      kelilingOutput.textContent = '';
      return;
  }

  const luas = sisi + sisi;
  const keliling = 4 * sisi;

  luasOutput.textContent = `Luas: ${luas.toFixed(2)} cm²`;
  kelilingOutput.textContent = `Keliling: ${keliling.toFixed(2)} cm`;
}