function login() {
  const userInput = document.getElementById('user').value.toLowerCase();
  const pwInput = document.getElementById('pw').value.toLowerCase();
  const outOutput = document.getElementById('out');

  if(pwInput == 'udinpertama' && userInput == 'udinnnn'){
    outOutput.textContent = 'Login Berhasil'
  }else{
    outOutput.textContent = 'Maaf,Password salah'
  }
}