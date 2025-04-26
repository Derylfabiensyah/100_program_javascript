function translasi() {
  const xInput = document.getElementById('sx');
  const yInput = document.getElementById('sy');
  const txInput = document.getElementById('stx');
  const tyInput = document.getElementById('sty');
  const outOutput = document.getElementById('out');

  const x = parseInt(xInput.value);
  const y = parseInt(yInput.value);
  const tx = parseInt(txInput.value);
  const ty = parseInt(tyInput.value);

  if (isNaN(x,y,tx,ty)) {
      outOutput.textContent = 'Masukkan nilai yang valid.';
      return;
  }
  const a = x + tx;
  const b = y + ty;

  outOutput.textContent = `Hasil translasi dari titik (${tx}, ${ty}) adalah (${a}, ${b})`;
}