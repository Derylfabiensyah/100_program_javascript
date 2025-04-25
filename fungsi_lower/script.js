function lower() {
  const textInput = document.getElementById('text').value; 
  const output = document.getElementById('out'); 

  let textKecil = textInput.toUpperCase();

  output.textContent = `Text asalnya: ${textInput} jadi: ${textKecil}`; 
}