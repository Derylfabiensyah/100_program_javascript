function hariKemarin() {
  const hariInput = document.getElementById('hari').value.toLowerCase();
  const outOutput = document.getElementById('out');

  if(hariInput == 'senin'){
    outOutput.textContent = 'Kemarinnya Adalah Minggu';
  }else if(hariInput == 'selasa'){
    outOutput.textContent = 'Kemarinnya Adalah Senin';
  }else if(hariInput == 'rabu'){
    outOutput.textContent = 'Kemarinnya Adalah Selasa';
  }else if(hariInput == 'kamis'){
    outOutput.textContent = 'Kemarinnya Adalah Rabu';
  }else if(hariInput == 'jumat'){
    outOutput.textContent = 'Kemarinnya Adalah Kamis';
  }else if(hariInput == 'sabtu'){
    outOutput.textContent = 'Kemarinnya Adalah Jumat';
  }else if(hariInput == 'minggu'){
    outOutput.textContent = 'Kemarinnya Adalah Sabtu';
  }else{
    outOutput.textContent = 'Ini Bukan Nama Hari'
  }
}