function alfa() {
  const huruf = document.getElementById('huruf').value.toLowerCase();
  const outOutput = document.getElementById('out');

  if ('aiueoAIUEO'.includes(huruf)) {
    outOutput.textContent = 'huruf ini termasuk kedalam huruf vokal'
  } else if (!isNaN(huruf)) {
    outOutput.textContent = 'ini bukan huruf'
  } else {
    outOutput.textContent = 'huruf ini termasuk kedalam huruf konsonan'
  }
}                 