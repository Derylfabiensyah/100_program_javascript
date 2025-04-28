function pilih() {
  const jawabInput = document.getElementById('jawab').value.toLowerCase();
  const outOutput = document.getElementById('out');


  if(jawabInput == 'c'){
    outOutput.textContent = 'Jawaban Kamu Tepat Sekali Vokalis Band Bentol Adalah Adif'
  }else{
    outOutput.textContent = 'Jawaban Kamu Salah'
  }
}