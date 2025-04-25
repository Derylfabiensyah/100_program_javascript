function hitungLingkaran() {
  const jariJariInput = document.getElementById('jari-jari');
  const luasOutput = document.getElementById('luas');
  const kelilingOutput = document.getElementById('keliling');

  const jariJari = parseFloat(jariJariInput.value);

  if (isNaN(jariJari)) {
      luasOutput.textContent = 'Masukkan jari-jari yang valid.';
      kelilingOutput.textContent = '';
      return;
  }

  const luas = 3.14 * jariJari * jariJari;
  const keliling = 2 * 3.14 * jariJari;

  luasOutput.textContent = `Luas: ${luas.toFixed(2)} cm²`;
  kelilingOutput.textContent = `Keliling: ${keliling.toFixed(2)} cm`;
}