function hariBesok() {
  const hariInput = document.getElementById('hari').value.toLowerCase();
  const outOutput = document.getElementById('out');

  if(hariInput == 'senin'){
    outOutput.textContent = 'Besoknya Selasa';
  }else if(hariInput == 'selasa'){
    outOutput.textContent = 'Besoknya Rabu';
  }else if(hariInput == 'rabu'){
    outOutput.textContent = 'Besoknya Kamis';
  }else if(hariInput == 'kamis'){
    outOutput.textContent = 'Besoknya Jumat';
  }else if(hariInput == 'jumat'){
    outOutput.textContent = 'Besoknya Sabtu';
  }else if(hariInput == 'sabtu'){
    outOutput.textContent = 'Besoknya Minggu';
  }else if(hariInput == 'minggu'){
    outOutput.textContent = 'Besoknya Senin';
  }else{
    outOutput.textContent = 'Ini Bukan Nama Hari'
  }
}