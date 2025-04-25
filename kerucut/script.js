function hitungKerucut() {
  const jariJariInput = document.getElementById('jari-jari');
  const sisiKerucutInput = document.getElementById('sisi_kerucut');
  const tinggiKerucutInput = document.getElementById('tinggi_kerucut');
  const luasSelimutOutput = document.getElementById('luas_selimut');
  const luasPermukaanOutput = document.getElementById('luas_permukaan');
  const volumeOutput = document.getElementById('volume');

  const jariJari = parseFloat(jariJariInput.value);
  const sisiKerucut = parseFloat(sisiKerucutInput.value);
  const tinggiKerucut = parseFloat(tinggiKerucutInput.value);

  if (isNaN(jariJari,sisiKerucut,tinggiKerucut)) {
      luasSelimutOutput.textContent = 'Masukkan jari-jari,sisi kerucut,tinggi keurucut yang valid.';
      luasPermukaanOutput.textContent = 'Masukkan jari-jari,sisi kerucut,tinggi keurucut yang valid.';
      volumeOutput.textContent = 'Masukkan jari-jari,sisi kerucut,tinggi keurucut yang valid.';
      return;
  }

  const ls = 3.14 * jariJari * sisiKerucut;
  const lp = (3.14 * jariJari * sisiKerucut) + (3.14 * jariJari * jariJari);
  const v = 1/3 * 3.14 * jariJari * jariJari * tinggiKerucut;
  

  luasSelimutOutput.textContent = ls;
  luasPermukaanOutput.textContent = lp;
  volumeOutput.textContent = v;
}