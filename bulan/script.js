function Bulan() {
  const bulanInput = document.getElementById('bulan').value;
  const outOutput = document.getElementById('Out');

  if(bulanInput == 1){
    outOutput.textContent = 'JANUARI'
  }else if (bulanInput == 2){
    outOutput.textContent = 'FEBRUARI'
  }else if (bulanInput == 3){
    outOutput.textContent = 'MARET'
  }else if (bulanInput == 4){
    outOutput.textContent = 'APRIL'
  }else if (bulanInput == 5){
    outOutput.textContent = 'MEI'
  }else if (bulanInput == 6){  
    outOutput.textContent = 'JUNI'
  }else if (bulanInput == 7) {
    outOutput.textContent = 'JULI'
  }else if (bulanInput == 8){
    outOutput.textContent = 'AGUSUTS'
  }else if (bulanInput == 9){
    outOutput.textContent = 'SEPTEMBER'
  }else if (bulanInput == 10){
    outOutput.textContent = 'OKTOBER'
  }else if (bulanInput == 11){
    outOutput.textContent = 'NOVEMBER'
  }else if (bulanInput == 12){
    outOutput.textContent = 'DESEMBER'
  }else{
    outOutput.textContent = 'nomor bulan tidak valid'
  }
}