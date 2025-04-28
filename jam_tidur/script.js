function jamTidur() {
  const jamInput = document.getElementById('jam');
  const outOutput = document.getElementById('out');

  const jam = parseInt(jamInput.value);

  if(1 <= jam && 3 >= jam){
    outOutput.textContent = 'Anda Harus Menjaga Pola Tidur Anda';
  }else if(jam == 4){
    outOutput.textContent = 'Anda Harus Menjaga Pola Tidur Anda';
  }else if(jam == 5 || jam == 6){
    outOutput.textContent = 'Anda Harus Menjaga Pola Tidur Anda';
  }else if(jam == 7 || jam == 8){
    outOutput.textContent = 'Pola Tidur Anda Sudah Bagus';
  }else if(jam == 9 || jam == 10){
    outOutput.textContent = 'Pola Tidur Anda Sudah Lumayan Bagus';
  }else if(jam >= 11){
    outOutput.textContent = 'Anda Terlalu Banyak Tidur';
  }else{
    outOutput.textContent = 'silahkan masukan bilangan bulat';
  }
}