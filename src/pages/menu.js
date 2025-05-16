export default function loadMenu() {
    const content = document.getElementById('content');
    const menuDiv = document.createElement('div');
    menuDiv.innerHTML = `
    <h2>The Menu</h2>
    <ul>
        <li>Steak</li>
        <li>Eggs</li>
        <li>Raw milk</li>
    </ul>
    `;
    content.appendChild(menuDiv);
}