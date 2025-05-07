function listrik() {
  const bulanInput = document.getElementById('bulan');
  const dayaInput = document.getElementById('daya');
  const waktuInput = document.getElementById('waktu');
  const outOutput = document.getElementById('out');

  const bulan = parseFloat(bulanInput.value);
  const daya = parseFloat(dayaInput.value);
  const waktu = parseFloat(waktuInput.value);

  if (isNaN(bulan,daya,waktu)) {
      outOutput.textContent = 'inputan anda tidak valid';
      outOutput.textContent = "masukan bilangan bulat / float";
      return;
  }

  const TARIF = 1500

  let biaya_listrik = (daya / 1000) * waktu * TARIF * 30 * bulan

  outOutput.textContent = `biaya listrik rumah anda selama ${bulan} bulan = ${biaya_listrik.toFixed(2)} `
}