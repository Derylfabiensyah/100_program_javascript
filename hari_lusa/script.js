function hariLusa() {
  const hariInput = document.getElementById('hari').value.toLowerCase();
  const outOutput = document.getElementById('out');

  if(hariInput == 'senin'){
    outOutput.textContent = 'Lusa Adalah Hari Rabu';
  }else if(hariInput == 'selasa'){
    outOutput.textContent = 'Lusa Adalah Hari Kamis';
  }else if(hariInput == 'rabu'){
    outOutput.textContent = 'Lusa Adalah Hari Jumat';
  }else if(hariInput == 'kamis'){
    outOutput.textContent = 'Lusa Adalah Hari Sabtu';
  }else if(hariInput == 'jumat'){
    outOutput.textContent = 'Lusa Adalah Hari Minggu';
  }else if(hariInput == 'sabtu'){
    outOutput.textContent = 'Lusa Adalah Hari Senin';
  }else if(hariInput == 'minggu'){
    outOutput.textContent = 'Lusa Adalah Hari Selasa';
  }else{
    outOutput.textContent = 'Ini Bukan Nama Hari'
  }
}