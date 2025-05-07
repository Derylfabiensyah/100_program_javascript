function diskon() {
  const br1Input = document.getElementById('br1');
  const br2Input = document.getElementById('br2');
  const br3Input = document.getElementById('br3');
  const br4Input = document.getElementById('br4');
  const outOutput = document.getElementById('out');

  const br1 = parseInt(br1Input.value)
  const br2 = parseInt(br2Input.value)
  const br3 = parseInt(br3Input.value)
  const br4 = parseInt(br4Input.value)

  let diskon = 7.5 / 100

  let total = br1 + br2 + br3 + br4
  diskon = total * diskon
  let diskon2 = total - diskon
  
  outOutput.textContent = `Total Belanja: Rp.${total.toFixed(3)}`
  
  if (total >= 100000){
    outOutput.textContent = `Total Bayar: Rp.${diskon2.toFixed(3)}`
  }else if (total <= 100000){
    outOutput.textContent = `Total Bayar: Rp.${total.toFixed(3)}`
  }
}