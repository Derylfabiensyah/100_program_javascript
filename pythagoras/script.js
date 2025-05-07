function pythagoras() {
  const aInput = document.getElementById("a");
  const bInput = document.getElementById("b");
  const out = document.getElementById("out");

  const a = parseInt(aInput.value);
  const b = parseInt(bInput.value);

  if (isNaN(a) || isNaN(b)) {
    out.innerHTML = "Silakan masukkan nilai numerik untuk a dan b.";
    return;
  }

  const c = Math.sqrt(a * a + b * b);
  out.innerHTML = `Sisi miring (c) = √(${a}² + ${b}²) = <strong>${c.toFixed(2)}</strong>`;
}                 