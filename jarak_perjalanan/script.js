function kecepatan() {
  const jarakInput = document.getElementById('jarakK');
  const waktuInput = document.getElementById('waktuK');
  const outOutput = document.getElementById('out');

  const jarak = parseInt(jarakInput.value);
  const waktu = parseInt(waktuInput.value);
  
  let kecepatan = jarak / waktu

  outOutput.textContent = `kecepatan kendaraan anda adalah = ${kecepatan.toFixed()} m/s`
}