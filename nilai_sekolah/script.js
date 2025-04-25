function hitung() {
  let pkn = parseInt(document.getElementById("pkn").value);
  let mtk = parseInt(document.getElementById("mtk").value);
  let inggris = parseInt(document.getElementById("inggris").value);

  let total = pkn + mtk + inggris;
  let rataRata = total / 3;
  let predikat = "";
  let status = "";
  let keterangan = "";

  if (rataRata >= 60) {
      predikat = "Lulus";
      status = "Selamat, Anda lulus!";
      keterangan = "Sangat baik!";
  } else {
      predikat = "Tidak Lulus";
      status = "Maaf, Anda tidak lulus.";
      keterangan = "Perbaiki nilai Anda.";
  }

  let jumlah = document.getElementById('jumlah_nilai');
  let rata = document.getElementById('rata_rata');
  let predik = document.getElementById('predikat');
  let statusKelulusan = document.getElementById('s_kelulusan');
  let ket = document.getElementById('keterangan');

  // let hasil = `
  //     <p>Total Nilai: ${total}</p>
  //     <p>Rata-Rata: ${rataRata.toFixed(2)}</p>
  //     <p>Predikat: ${predikat}</p>
  //     <p>Status: ${status}</p>
  //     <p>Keterangan: ${keterangan}</p>
  // `;

  // document.getElementById("hasil").innerHTML = hasil;
  jumlah.textContent = total
  rata.textContent = rataRata
  predik.textContent = predikat
  statusKelulusan.textContent = status
  ket.textContent = keterangan
}
