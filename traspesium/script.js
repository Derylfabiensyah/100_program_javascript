hasil.addEventListener("click",function(){

  const a = document.getElementById("a").value
  const b = document.getElementById("b").value
  const c = document.getElementById("c").value
  const t = document.getElementById("t").value
  const d = document.getElementById("d").value
  const tampilKeliling = document.getElementById("keliling")
  const tampilLuas = document.getElementById("luas")
  const hasil = document.getElementById("hasil")


  let keliling = a+b+c+d
  let luas = 21 *(a+b)*t
  tampilKeliling.innerHTML = (Math.floor(keliling) + "cm<sup>2</sup>")
  tampilLuas.innerHTML = (Math.floor(luas) + "cm<sup>2</sup>")
})