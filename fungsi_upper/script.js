function lower() {
  const textInput = document.getElementById('text').value; 
  const output = document.getElementById('out'); 

  let textKecil = textInput.toLowerCase();

  output.textContent = `Text asalnya: ${textInput} jadi: ${textKecil}`; 
}