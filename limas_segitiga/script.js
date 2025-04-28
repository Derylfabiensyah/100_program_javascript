function jamTidur() {
  const lobInput = document.getElementById('lob');
  const lokInput = document.getElementById('lok');
  const lpInput = document.getElementById('lp');
  const outOutput = document.getElementById('out');

  const lob = parseInt(lobInput.value);
  const lok = parseInt(lokInput.value);
  const lp = parseInt(lpInput.value);

  let rumus = lob + (4 * lp) + lok

  outOutput.textContent = `panjang teropong : ${rumus.toFixed(2)}`
}