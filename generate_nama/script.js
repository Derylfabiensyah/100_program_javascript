const firstNames = ['muin', 'kiano', 'aisha', 'ibing', 'Eka', 'Fajar', 'Gita', 'Hendra'];
const lastNames = ['Pratama', 'Sutanto', 'kania', 'Wahyu', 'Ramadhan', 'Putra', 'Mahendra', 'Halim'];

function generateName() {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  const fullName = firstName + " " + lastName;
  document.getElementById('nameDisplay').textContent = fullName;
}