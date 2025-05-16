export default function loadContact() {
    const content = document.getElementById('content');
    const contactDiv = document.createElement('div');
    contactDiv.innerHTML = `
        <h2>Contact Us</h2>
        <p>Email: fakerestaurant@test</p>
        <p>Phone: xxx-xxx-xxxx</p>
        `;
        content.appendChild(contactDiv);
}