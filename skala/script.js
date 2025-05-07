function skala() {
  const jarakInput = document.getElementById("jarak");
  const skalaInput = document.getElementById("skala");
  const out = document.getElementById("out");

  const jarak = parseInt(jarakInput.value);
  const skala = parseInt(skalaInput.value);

  if (isNaN(jarak) || isNaN(skala) || skala <= 0) {
    out.innerHTML = "Input tidak valid. Pastikan kedua nilai terisi dan skala lebih dari 0.";
    return;
  }

  const jarakSebenarnya = (jarak * skala) / 100000;
  out.innerHTML = `Jarak sebenarnya: <strong>${jarakSebenarnya.toFixed(2)} km</strong>`;
  
}                 