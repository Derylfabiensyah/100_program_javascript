function segitiga() {
  const a1Input = document.getElementById('a1');
  const a2Input = document.getElementById('a2');
  const tInput = document.getElementById('t');
  const outOutput = document.getElementById('out');

  const a1 = parseInt(a1Input.value);
  const a2 = parseInt(a2Input.value);
  const t = parseInt(tInput.value);

  if (a1 == a2 && a2 == t) {
    outOutput.textContent = 'Segitiga sama sisi';
  } else if (a1 == a2 && a2 > t) {
    outOutput.textContent = 'Segitiga sama kaki';
  } else if (a1 == 90 || a2 == 90) {
    outOutput.textContent = 'Segitiga siku-siku';
  } else if (a1 > 90 || a2 > 90 || t > 90) {
    outOutput.textContent = 'Segitiga tumpul';
  } else if (a2 == a1 && a1 > t) {
    outOutput.textContent = 'Segitiga sama kaki';
  } else if (a2 == 90 || a1 == 90) {
    outOutput.textContent = 'Segitiga siku-siku';
  } else if (a2 > 90 || a1 > 90 || t > 90) {
    outOutput.textContent = 'Segitiga tumpul';
  } else {
    outOutput.textContent = 'Segitiga sembarang';
  }
}