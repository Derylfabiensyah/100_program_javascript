const secanNya = {
  0: "1",
  30: "2√3/3",
  45: "√2",
  60: "2",
  90: "<span class='tak-terdefinisi'>Tak Terdefinisi</span>",
  120: "-2",
  135: "-√2",
  150: "-2√3/3",
  180: "-1",
  210: "-2√3/3",
  225: "-√2",
  240: "-2",
  270: "<span class='tak-terdefinisi'>Tak Terdefinisi</span>",
  300: "2",
  315: "√2",
  330: "2√3/3",
  360: "1"
};

function hitungSecan() {
  const sudut = document.getElementById("sudut").value;
  const hasilElement = document.getElementById("hasil");
  const konfirmasiElement = document.getElementById("konfirmasi");
  
  const nilaiSecan = secanNya[sudut];
  hasilElement.innerHTML = `
      <p>sec(${sudut}°) =</p>
      <div class="pecahan">${nilaiSecan}</div>
  `;
  
  konfirmasiElement.style.display = "block";
}

function ulangiProgram() {
  document.getElementById("hasil").innerHTML = "";
  document.getElementById("konfirmasi").style.display = "none";
}