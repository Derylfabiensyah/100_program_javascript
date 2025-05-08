function hitungGanjil() {
    const angka = parseInt(document.getElementById("angka").value);
    const out = document.getElementById("out");
    
    if (isNaN(angka) || angka < 1) {
        out.textContent = "Masukkan angkanya bang";
        return;
    }
    
    let jumlah = 0;
    for (let i = 1; i <= angka; i++) {
        if (i % 2 != 0) {
            jumlah += i;
        }
    }
    
    out.textContent = `Hasil penjumlahan angka ganjil dari 1 sampai ${angka} adalah: ${jumlah}`;
}
