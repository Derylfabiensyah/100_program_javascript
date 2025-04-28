function limasSegitiga() {
  const laInput = document.getElementById('la');
  const tInput = document.getElementById('t');
  const stInput = document.getElementById('st');
  const lpOutput = document.getElementById('lp');
  const vOutput = document.getElementById('v');

  const la = parseInt(laInput.value);
  const t = parseInt(tInput.value);
  const st = parseInt(stInput.value);

  let lp = la + st
  let v = 1 / 3 * la * t

  lpOutput.textContent = `Luas Permukaan : ${lp.toFixed(2)}`
  vOutput.textContent = `Volume : ${v.toFixed(2)}`
}