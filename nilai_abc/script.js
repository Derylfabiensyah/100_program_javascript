function nilaiAbc(){
  const naInput = document.getElementById('na');
  const nbInput = document.getElementById('nb');
  const ncInput = document.getElementById('nc');
  const outOutput = document.getElementById('out');

  const a = parseInt(naInput.value);
  const b = parseInt(nbInput.value);
  const c = parseInt(ncInput.value);

  if (isNaN(a,b,c)) {
    outOutput.textContent = 'Masukkan nilai yang valid.';
    return;
}

const x = (-b) + 2  * (c**2) * + 4 * a * b / 2 * c ;

outOutput.textContent = `hasil dari rumus abc adalah : ${x.toFixed(2)}`;


}