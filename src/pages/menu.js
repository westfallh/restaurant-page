export default function loadMenu() {
    const content = document.getElementById('content');
    const menuDiv = document.createElement('div');
    menuDiv.innerHTML = `
    <h2>The Menu</h2>
    <ul>
        <li>Steak . . . . . $20</li>
        <li>Eggs . . . . . $20</li>
        <li>Raw milk . . . . . $20</li>
    </ul>
    `;
    content.appendChild(menuDiv);
}