import restaurantImg from '../assets/restaurant.jpg';

export default function loadHome() {
  const content = document.getElementById('content');
  const homeDiv = document.createElement('div');
  homeDiv.innerHTML = `
    <h1>Welcome to Factory</h1>
    <img src="${restaurantImg}" alt="Restaurant image">
    <p>We serve the best imaginary food. Come taste the concept!</p>
  `;
  content.appendChild(homeDiv);
}
