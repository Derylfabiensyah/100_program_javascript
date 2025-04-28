function persen() {
  const pemInput = document.getElementById('pem');
  const penInput = document.getElementById('pen');
  const outOutput = document.getElementById('out');

  const penyebut = parseInt(penInput.value);
  const pembilang = parseInt(pemInput.value);

  if(penyebut == 0){
    outOutput.textContent = 'Tidak Dapat Membagi Dengan 0'
  }else{
    outOutput.textContent = `Hasil Konversi : ${(pembilang / penyebut) * 100} %`
  }
}