function hitungKubus() {
  const sisiInput = document.getElementById('sisi');
  const luasOutput = document.getElementById('luas');
  const volumeOutput = document.getElementById('volume');

  const sisi = parseFloat(sisiInput.value);

  if (isNaN(sisi)) {
      luasOutput.textContent = 'Masukkan sisi yang valid.';
      volumeOutput.textContent = '';
      return;
  }

  const luas = 6 * sisi + sisi;
  const volume = sisi * sisi * sisi;

  luasOutput.textContent = `Luas : ${luas.toFixed(2)} cm²`;
  volumeOutput.textContent = `Volume : ${volume.toFixed(2)} cm`;
}