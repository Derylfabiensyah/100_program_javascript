function hitungProtein() {
  const kelamin = document.getElementById("kel").value;
  const umur = parseInt(document.getElementById("umur").value);
  let out = document.getElementById("out");

  if (kelamin == "cowok") {
      if (1 <= umur && umur <= 3) {
          out = "Kamu masih anak-anak. Protein yang harus kamu konsumsi perhari adalah 14 gram.";
      } else if (4 <= umur && umur <= 8) {
          out = "Kamu masih anak-anak. Protein yang harus kamu konsumsi perhari adalah 19 gram.";
      } else if (9 <= umur && umur <= 13) {
          out = "Kamu masih anak-anak. Protein yang harus kamu konsumsi perhari adalah 34 gram.";
      } else if (14 <= umur && umur <= 18) {
          out = "Kamu sudah remaja. Protein yang harus kamu konsumsi perhari adalah 52 gram.";
      } else if (19 <= umur && umur <= 50) {
          out = "Kamu sudah dewasa. Protein yang harus kamu konsumsi perhari adalah 56 gram.";
      } else {
          out = "Kamu sudah manula. Protein yang harus kamu konsumsi perhari adalah 56 gram.";
      }
  } else if (kelamin == "cewek") {
      if (1 <= umur && umur <= 3) {
          out = "Kamu masih anak-anak. Protein yang harus kamu konsumsi perhari adalah 14 gram.";
      } else if (4 <= umur && umur <= 8) {
          out = "Kamu masih anak-anak. Protein yang harus kamu konsumsi perhari adalah 19 gram.";
      } else if (9 <= umur && umur <= 13) {
          out = "Kamu masih anak-anak. Protein yang harus kamu konsumsi perhari adalah 34 gram.";
      } else if (14 <= umur && umur <= 18) {
          out = "Kamu sudah remaja. Protein yang harus kamu konsumsi perhari adalah 46 gram.";
      } else if (19 <= umur && umur <= 50) {
          out = "Kamu sudah dewasa. Protein yang harus kamu konsumsi perhari adalah 46 gram.";
      } else {
          out = "Kamu sudah manula. Protein yang harus kamu konsumsi perhari adalah 46 gram.";
      }
  } else {
      out = `${kelamin} tidak valid.`;
  }

  document.getElementById("out").innerText = out;
}