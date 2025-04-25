function jajarGenjang() {
  const alasInput = document.getElementById('alas');
  const tinggiInput = document.getElementById('tinggi');
  const luasOutput = document.getElementById('luas');

  const alas = parseFloat(alasInput.value);
  const tinggi = parseFloat(tinggiInput.value);

  if (isNaN(alas,tinggi)) {
      luasOutput.textContent = 'Masukkan alas atau tinggi yang valid.';
      return;
  }

  const luas = alas * tinggi;

  luasOutput.textContent = luas.toFixed(2);
}