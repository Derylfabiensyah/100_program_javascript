function segitiga() {
  const aInput = document.getElementById('a');
  const bInput = document.getElementById('b');
  const cInput = document.getElementById('c');
  const outOutput = document.getElementById('out');

  const a = parseInt(aInput.value);
  const b = parseInt(bInput.value);
  const c = parseInt(cInput.value);

  if(a**2 + b**2 == c**2){
    outOutput.textContent = 'Ini termasuk Segitiga Siku Siku';
  }else if(a**2 + b**2 > c**2){
    outOutput.textContent = 'Ini termasuk Segitiga Lancip';
  }else if(a**2 + b**2 < c**2){
    outOutput.textContent = 'Ini termasuk Segitiga Tumpul';
  } else{
    outOutput.textContent = 'Ini Bukan Segitiga';
  }
}