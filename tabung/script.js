hasil.addEventListener("click",function(){

  const jari = document.getElementById("jari").value;
  const tinggi = document.getElementById("tinggi").value;
  const tampilKeliling = document.getElementById("keliling")
  const tampilLuas = document.getElementById("luas")
  const hasil = document.getElementById("hasil")

  // keliling
  let keliling = 2 * 3.14 * jari 
  let luas = 3.14 * jari * jari
  tampilKeliling.innerHTML = (Math.floor(keliling) + "cm<sup>2</sup>")
  tampilLuas.innerHTML = (Math.floor(luas) + "cm<sup>2</sup>")
})