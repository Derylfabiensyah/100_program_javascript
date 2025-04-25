function hitungBola() {
  const jariJariInput = document.getElementById('jari_jari');
  const luasPermukaanOutput = document.getElementById('luas_permukaan');
  const volumeOutput = document.getElementById('volume');

  const jariJari = parseFloat(jariJariInput.value);

  if (isNaN(jariJari)) {
      luasPermukaanOutput.textContent = 'Masukkan panjang atau lebar yang valid.';
      volumeOutput.textContent = '';
      return;
  }

  const lp = 4 * Math.PI * Math.pow(jariJari, 2);
  const volume = (4 / 3) * Math.PI * Math.pow(jariJari, 3);

  luasPermukaanOutput.textContent = `Luas Permukaan : ${lp.toFixed(2)}`;
  volumeOutput.textContent = `Volume : ${volume.toFixed(2)}`;

}