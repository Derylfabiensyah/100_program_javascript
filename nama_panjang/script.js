function nama() {
  const nama = document.getElementById("nama").value.trim();
  const hasil = document.getElementById("hasil");

  if (nama == "" || !isNaN(nama)) {
    hasil.innerHTML = "Inputan anda tidak valid.<br>Masukkan inputan bertipe string saja.";
  } else {
    hasil.innerHTML = `Panjang nama anda adalah = ${nama.length}`;
  }
}                 