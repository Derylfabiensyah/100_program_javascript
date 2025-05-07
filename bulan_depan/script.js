function buldep() {
  const bulanInput = document.getElementById('bulan').value.toLowerCase();
  const outOutput = document.getElementById('out');

  if(bulanInput == "januari"){
    outOutput.textContent = 'Bulan depan adalah Februari'
  }else if (bulanInput == "februari"){
    outOutput.textContent = 'Bulan depan adalah Maret'
  }else if (bulanInput == "maret"){
    outOutput.textContent = 'Bulan depan adalah April'
  }else if (bulanInput == "april"){
    outOutput.textContent = 'Bulan depan adalah Mei'
  }else if (bulanInput == "mei"){
    outOutput.textContent = 'Bulan depan adalah Juni'
  }else if (bulanInput == "juni"){  
    outOutput.textContent = 'Bulan depan adalah Juli'
  }else if (bulanInput == "juli") {
    outOutput.textContent = 'Bulan depan adalah Agustus'
  }else if (bulanInput == "agustus"){
    outOutput.textContent = 'Bulan depan adalah September'
  }else if (bulanInput == "september"){
    outOutput.textContent = 'Bulan depan adalah September'
  }else if (bulanInput == "oktober"){
    outOutput.textContent = 'Bulan depan adalah Oktober'
  }else if (bulanInput == "november"){
    outOutput.textContent = 'Bulan depan adalah Desember'
  }else if (bulanInput == "desember"){
    outOutput.textContent = 'Bulan depan adalah januari'
  }else{
    outOutput.textContent = 'ini bukan nama bulan'
  }
}