function waktu() {
  const jarakInput = document.getElementById('jarak');
  const waktuInput = document.getElementById('waktu');
  const outOutput = document.getElementById('out');

  const s = parseFloat(jarakInput.value)
  const v = parseFloat(waktuInput.value)

  let t = s / v
  outOutput.textContent = `Waktu yang di butuhkan adalah ${t.toFixed(2)}`
}                 