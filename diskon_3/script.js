function diskon() {
  const diskonInput = document.getElementById('diskon');
  const outOutput = document.getElementById('out');

  const diskon = parseInt(diskonInput.value)

  harga_diskon = diskon * 25 / 100
  total_harga_diskon = diskon - harga_diskon

  if(diskon >= 100){
    outOutput.textContent = `ini adalah total harga yang harus anda bayar = Rp.${total_harga_diskon.toFixed(3)}`
  }else if(diskon < 100){
    outOutput.textContent = `maaf karena total belanja anda adalah = Rp.${diskon.toFixed(3)}\nmaka anda tidak mendapat diskon`
  }
}