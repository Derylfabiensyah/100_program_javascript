function bb() {
  const tinggiInput = document.getElementById('tinggi');
  const beratInput = document.getElementById('berat');
  const outOutput = document.getElementById('out');

  const tinggi_badan = parseInt(tinggiInput.value)
  const berat_badan = parseInt(beratInput.value)

  let operasi1 = tinggi_badan - 100
  let berat_ideal = operasi1 - 0.1

  outOutput.textContent = 'Berat badan ideal anda adalah : ', berat_ideal, 'kg'

  if (berat_badan >= (berat_ideal - 2) && berat_badan <= (berat_ideal + 2)) {
    outOutput.textContent = 'Berat badan ideal';
  } else {
      outOutput.textContent = 'Berat badan tidak ideal';
  }
}                 