import mapData from './subway-stops.js';

// Function to generate random name
function generateRandomName() {
  const keys = Object.keys(mapData);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return mapData[randomKey].name;
}

// Attach event listener to button
document.getElementById('randomNameButton').addEventListener('click', function() {
  const randomName = generateRandomName();
  const randomNameElement = document.getElementById('randomName');
  randomNameElement.textContent = randomName;

  document.getElementById('randomName').innerHTML = `<a href="https://www.google.com/maps/search/?api=1&query=${randomName}" target="_blank">${randomName}</a>`;
});
