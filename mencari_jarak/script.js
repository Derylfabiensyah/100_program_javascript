function jarak() {
  const sInput = document.getElementById('s');
  const vInput = document.getElementById('v');
  const outOutput = document.getElementById('out');

  const s = parseFloat(sInput.value)
  const v = parseFloat(vInput.value)
  let password = 'udinpertama'

  t = s / v

  outOutput.textContent = `Waktu Yang Dibutuhkan Adalah ${t}`
}