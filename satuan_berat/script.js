function berat() {
  const beratInput = document.getElementById('berat');
  const satuanInput = document.getElementById('satuan').value.toLowerCase();
  const outOutput = document.getElementById('out');

  const berat = parseFloat(beratInput.value);

  if (isNaN(berat)) {
    outOutput.textContent = 'Masukkan Berat Yang Valid';
    return;
  }

  if(satuanInput == "k"){
    outOutput.textContent = `Berat Kamu Adalah : ${berat * 2.205}Kg`;
  }else if (satuanInput == "p"){
    outOutput.textContent = `Berat Kamu Adalah : ${berat / 2.205}Lbs`;
  }else{
    outOutput.textContent = 'Satuan Tidak Valid'
  }
}