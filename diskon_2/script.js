function diskon() {
  const diskonInput = document.getElementById('diskon');
  const outOutput = document.getElementById('out');

  const diskon = parseInt(diskonInput.value)

  if(diskon >= 100){
    diskon * 5 / 100
    outOutput.textContent = 'selamat anda mendapat diskon sebesar 5%'
  }else if(diskon < 100){
    outOutput.textContent = 'maaf anda tidak dapat diskon '
  }

  diskon = total_harga * 5 / 100
  outOutput.textContent = `ini adalah diskon anda = ${diskon}`
  total_harga_diskon = total_harga - diskon
  outOutput.textContent = `ini adalah harga yang harus anda bayar = ${total_harga_diskon}`
}                 