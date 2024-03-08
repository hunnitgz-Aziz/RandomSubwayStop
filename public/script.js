import mapData from './subway-stops';

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

  const googleMapsLink = document.createElement('a');
  googleMapsLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(randomName)}`;
  googleMapsLink.textContent = 'Open in Google Maps';
  googleMapsLink.target = '_blank';

  randomNameElement.appendChild(document.createElement('br'));
  randomNameElement.appendChild(googleMapsLink);
});
