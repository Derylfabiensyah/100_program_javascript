function tebak() {
  const tebakInput = document.getElementById('user');
  const outOutput = document.getElementById('out');

  const user = parseInt(tebakInput.value)
  let x = Math.random() * 10;

  if(user == x){
    outOutput.textContent = 'KAMU MENANG!!'
  }else if (user != x){
    outOutput.textContent = 'KAMU KALAH!!'
  }else{
    outOutput.textContent = 'masukan angka yang benar'
  }
}                 