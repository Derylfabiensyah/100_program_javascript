function tahunKabisat(tahun) {
  return (tahun % 4 == 0 && tahun % 100 != 0) || (tahun % 400 == 0);
}

function tKabisat() {
  const tahunUser = document.getElementById('tahun')
  const out = document.getElementById('out')

  const tahunInput = parseInt(tahunUser.value)
  const tahunSekarang = 2025;
  let jumlahKabisat = 0;

  if (isNaN(tahunInput) || tahunInput < 0) {
    out.innerHTML = "Masukkan tahun yang valid.";
    return;
  }

  for (let tahun = tahunInput; tahun <= tahunSekarang; tahun++) {
    if (tahunKabisat(tahun)) {
      jumlahKabisat++;
    }
  }

  out.innerHTML = `Dari tahun ${tahunInput} hingga ${tahunSekarang}, terdapat ${jumlahKabisat} tahun kabisat.`;
}