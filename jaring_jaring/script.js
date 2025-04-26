function jaringJaring() {
  const jariJariInput = document.getElementById('jariJari');
  const sisiMiringInput = document.getElementById('sisiMiring');
  const tinggiInput = document.getElementById('tinggi');

  const luasSelimutOutput = document.getElementById('luas_selimut');
  const luasPermukaanOutput = document.getElementById('luas_permukaan');
  const volumeOutput = document.getElementById('volume');

  const jariJari = parseFloat(jariJariInput.value)  
  const sisiMiring = parseFloat(sisiMiringInput.value);
  const tinggi = parseFloat(tinggiInput.value);

  if (isNaN(tinggi,sisiMiring,jariJari)) {
      luasSelimutOutput.textContent = 'Masukkan jari jari atau sisi miring atau tinggi yang valid.';
      luasPermukaanOutput.textContent = '';
      volumeOutput.textContent = '';
      return;
  }

  const ls = 3.14 * jariJari * sisiMiring
  const lp = (3.14 * jariJari * sisiMiring) + (3.14 * jariJari * jariJari)
  const v = 1/3 * 3.14 * jariJari * jariJari * tinggi

  luasSelimutOutput.textContent = `Luas selimut : ${ls.toFixed(2)}`;
  luasPermukaanOutput.textContent = `luas permukaan: ${lp.toFixed(2)}`;
  volumeOutput.textContent = `volume : ${v.toFixed(2)}`;
}