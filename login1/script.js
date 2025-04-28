function login() {
  const userInput = document.getElementById('user').value.toLowerCase();
  const pwInput = document.getElementById('pw').value.toLowerCase();
  const outOutput = document.getElementById('out');

  let password = 'udinpertama'

  if(pw == password){
    outOutput.textContent = 'Login Berhasil'
  }else{
    outOutput.textContent = 'Maaf,Password salah'
  }
}