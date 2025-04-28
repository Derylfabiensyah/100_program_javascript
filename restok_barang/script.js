function barang() {
  const barangInput = document.getElementById('barang');
  const outOutput = document.getElementById('out');

  const barang = parseInt(barangInput.value);

  if (isNaN(barang)) {
    outOutput.textContent = 'Masukkan angka yang valid';
    return;
  }

  if (barang >= 50) {
    outOutput.textContent = 'Barang Boleh di Jual Belikan';
  } else if (barang <= 10) {
    outOutput.textContent = 'Barang Harus di Restok';
  } else {
    outOutput.textContent = 'Barang Tidak Boleh di Perjual Belikan';
  }
}