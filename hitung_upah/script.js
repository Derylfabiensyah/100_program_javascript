function upah() {
  const golongan = document.getElementById('gol').value.toUpperCase();
  const kerjaInput = document.getElementById('kerja');
  const lemburInput = document.getElementById('lembur');
  const outOutput = document.getElementById('out');

  const jam_kerja = parseInt(kerjaInput.value)
  const jam_lembur = parseInt(lemburInput.value)

  let upah_perjam = ''

  if (golongan == 'A'){
    upah_perjam = 4000;
  }else if (golongan == 'B'){
    upah_perjam = 5000;
  }else if (golongan == 'C'){
    upah_perjam = 6000;
  }else if (golongan == 'D'){
    upah_perjam = 7500;
  }else{
    outOutput.textContent = 'golongan tidak ada'
    upah_perjam = 0
  }

  let upah_kerja = jam_kerja * upah_perjam
  let upah_lembur = jam_kerja * (upah_perjam * 1.5)
  let total_upah = jam_lembur + upah_perjam

  outOutput.textContent = `total upah : Rp.${total_upah}`
}                 