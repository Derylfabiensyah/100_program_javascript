function hitungGenap() {
  const angka = parseInt(document.getElementById("angka").value);
  const out = document.getElementById("out");
  
  if (isNaN(angka) || angka < 1) {
      out.textContent = "Masukkan angkanya bang";
      return;
  }
  
  let jumlah = 0;
  let i = 0;
  while(i <= angka){
      if(i % 2 == 0){
          jumlah += i
      }
      i++
  }
  
  out.textContent = `Hasil penjumlahan angka genap dari 1 sampai ${angka} adalah: ${jumlah}`;
}