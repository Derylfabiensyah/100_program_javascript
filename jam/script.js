function jam() {
  const jamInput = document.getElementById('jam'); 
  const outOutput = document.getElementById('out'); 
  
  let jam = jamInput.value;

  if (jam >= 4 && jam <= 10) {
      outOutput.textContent = 'SELAMAT PAGI BOSKU'
  } else if (jam >= 11 && jam <= 14) {
      outOutput.textContent = 'SELAMAT SIANG BOSKU'
  } else if (jam >= 15 && jam <= 17) {
      outOutput.textContent = 'SELAMAT SORE BOSKU'
  } else if (jam == 18) {
      outOutput.textContent = 'MAGRIB BOSKU'
  } else if (jam >= 19 && jam <= 24) {
      outOutput.textContent = 'SELAMAT MALAM BOSKU'
  } else if (jam >= 1 && jam <= 3) {
      outOutput.textContent = 'TIDUR BOSKU'
  } else {
      outOutput.textContent = 'PESAN ERROR BOSKU'
  }
}