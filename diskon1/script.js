hasil.addEventListener("click",function(){

  const diskon = document.getElementById("diskon")
  const harga = document.getElementById("harga").value;
  const hasil = document.getElementById("hasil2")

  const total = harga - (harga * diskon.value / 100)
  hasil.textContent = `Rp.${total}`


})