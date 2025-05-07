function zat() {
  const suhuInput = document.getElementById('suhu');
  const outOutput = document.getElementById('out');

  const suhu = parseInt(suhuInput.value);

  if (suhu <= 0) {
    outOutput.textContent = 'Ini adalah zat padat';
  } else if (suhu > 0 && suhu < 100) {
    outOutput.textContent = 'Ini adalah zat cair';
  } else if (suhu >= 100) {
    outOutput.textContent = 'Ini adalah zat gas';
  } else {
    outOutput.textContent = 'Masukkan suhu yang valid';
  }
}