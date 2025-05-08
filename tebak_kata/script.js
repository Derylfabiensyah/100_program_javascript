const words = ['javascript', 'html', 'css', 'node', 'react', 'python'];
const chosenWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let remainingChances = 10;


function updateWordDisplay() {
    let wordDisplay = '';
    for (let letter of chosenWord) {
        if (guessedLetters.includes(letter)) {
            wordDisplay += letter + ' ';
        } else {
            wordDisplay += '_ ';
        }
    }
    document.getElementById('wordDisplay').textContent = wordDisplay.trim();
}


function guessLetter() {
    const letterInput = document.getElementById('letterInput');
    const letter = letterInput.value.toLowerCase();
    const messageElement = document.getElementById('message');
    const chancesElement = document.getElementById('chances');

    if (!letter.match(/[a-z]/i)) {
        messageElement.textContent = "Masukkan huruf yang valid!";
        return;
    }


    if (guessedLetters.includes(letter)) {
        messageElement.textContent = "Huruf ini sudah pernah ditebak!";
        return;
    }


    guessedLetters.push(letter);


    if (!chosenWord.includes(letter)) {
        remainingChances--;
        messageElement.textContent = `Huruf ${letter} tidak ada dalam kata!`;
    } else {
        messageElement.textContent = `Huruf ${letter} benar!`;
    }


    updateWordDisplay();
    chancesElement.textContent = `Kesempatan: ${remainingChances}`;


    if (!document.getElementById('wordDisplay').textContent.includes('_')) {
        messageElement.textContent = `Selamat! Kamu berhasil menebak kata: ${chosenWord}`;
        document.getElementById('letterInput').disabled = true;
    }


    if (remainingChances <= 0) {
        messageElement.textContent = `Game Over! Kata yang benar adalah: ${chosenWord}`;
        document.getElementById('letterInput').disabled = true;
    }
    letterInput.value = '';
    letterInput.focus();
}

updateWordDisplay();
