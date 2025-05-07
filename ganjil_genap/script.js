function gg() {
  const angkaInput = document.getElementById('angka');
  const outOutput = document.getElementById('out');

  const user = parseInt(angkaInput.value);

  let rumus = user % 2

  if(user == rumus){
    outOutput.textContent = 'GENAP'
  }else{
    outOutput.textContent = 'GANJIL'
  }
}