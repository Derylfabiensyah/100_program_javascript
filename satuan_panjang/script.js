function panjang() {
  const isiInput = document.getElementById('isi');
  const outOutput = document.getElementById('out')

  const isi = parseInt(isiInput.value);

  if (isNaN(isi)) {
    outOutput.textContent = 'Masukan Interger Saja'
  }

  let milimeter = isi * 1000;
  let sentimeter = isi * 100;
  let dekameter = isi / 10; 
  let hektometer = isi / 100;
  let kilometer = isi / 1000;

  outOutput.textContent = `Hasil konversi meter ${isi}: \n Milimeter = ${milimeter} \n Sentimeter = ${sentimeter} \n Dekameter = ${dekameter} \n Hektometer = ${hektometer} \n Kilometer = ${kilometer}`
}