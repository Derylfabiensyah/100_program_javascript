function parkir() {
  const masukInput = document.getElementById('masuk');
  const keluarInput = document.getElementById('keluar');
  const outOutput = document.getElementById('out');

  const jam_masuk = parseFloat(masukInput.value);
  const jam_keluar = parseFloat(keluarInput.value);

  if (jam_keluar < jam_masuk){
    outOutput.textContent = 'Jam keluar tidak boleh lebih awal dari jam masuk.'
  }else{
    lama_parkir = jam_keluar - jam_masuk
    biaya = 2000
  }

  if( lama_parkir > 2){
    biaya += (lama_parkir - 2) * 500
  }

  outOutput.textContent = `Biaya = ${biaya}`
}