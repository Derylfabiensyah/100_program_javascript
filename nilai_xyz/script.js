function nilaiXyz(){
  const nxInput = document.getElementById('nx');
  const nyInput = document.getElementById('ny');
  const nzInput = document.getElementById('nz');
  const outOutput = document.getElementById('out');

  const x = parseInt(nxInput.value);
  const y = parseInt(nyInput.value);
  const z = parseInt(nzInput.value);

  if(x > y && x > z){
    outOutput.textContent = 'nilai x lebih besar dari y dan z';
    return;
  } else if(y > x && y > z){
    outOutput.textContent = 'nilai y lebih besar dari x dan z';
    return;
  } else if(z > x && z > y){
    outOutput.textContent = 'nilai z lebih besar dari x dan y';
    return;
  } else{
    outOutput.textContent = 'nilai salah';
    return;
  }


}