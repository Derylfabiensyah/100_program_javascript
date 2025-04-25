function belahKetupat() {
    const sisiD1Input = document.getElementById('d1');
    const sisiD2Input = document.getElementById('d2');
    const luasOutput = document.getElementById('luas');
  
    const d1 = parseFloat(sisiD1Input.value);
    const d2 = parseFloat(sisiD2Input.value);
  
    if (isNaN(d1,d2)) {
        luasOutput.textContent = 'Masukkan sisi diagonal yang valid.';
        return;
    }
  
    const luas = 1/2 * d1 * d2;
  
    luasOutput.textContent = `Luas : ${luas.toFixed(2)}`;
  }