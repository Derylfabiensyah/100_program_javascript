function mobil() {
  const mobilInput = document.getElementById('mobil').value.toLowerCase();
  const outOutput = document.getElementById('out');

  if(mobilInput == "rusak"){
    outOutput.textContent = 'Jangan Lupa Service'
  }else if (mobilInput == "bagus"){
    outOutput.textContent = 'Mantap Lanjut'
  }else{
    outOutput.textContent = 'okeh'
  }
}