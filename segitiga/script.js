function hitungSegitiga() {
  const tinggiInput = document.getElementById('tinggi');
  const alasInput = document.getElementById('alas');
  const luasOutput = document.getElementById('luas');
  const kelilingOutput = document.getElementById('keliling');

  const tinggi = parseFloat(tinggiInput.value);
  const alas = parseFloat(alasInput.value);

  if (isNaN(tinggi,alas)) {
      luasOutput.textContent = 'Masukkan tinggi atau alas yang valid.';
      kelilingOutput.textContent = '';
      return;
  }

  const luas = 0.5 * (alas * tinggi);
  const keliling = alas * alas * alas;

  luasOutput.textContent = `Luas : ${luas.toFixed(2)} cm²`;
  kelilingOutput.textContent = `keliling : ${keliling.toFixed(2)} cm²`;
}