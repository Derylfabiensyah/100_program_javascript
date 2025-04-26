function hitungSegidelapan() {
  const sisiInput = document.getElementById('sisi');
  const kelilingOutput = document.getElementById('keliling');

  const sisi = parseFloat(sisiInput.value);

  if (isNaN(sisi)) {
      kelilingOutput.textContent = 'Masukkan sisi yang valid.';
      return;
  }

  const keliling = 8 * sisi;

  kelilingOutput.textContent = `keliling : ${keliling.toFixed(2)} cm²`;
}