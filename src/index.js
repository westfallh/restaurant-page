import loadHome from './pages/home';
import loadMenu from './pages/menu';
import loadContact from './pages/contact';
import './style.css'
function clearContent() {
    document.getElementById('content').innerHTML = '';
}

function setupNav() {
    document.getElementById('home-btn').addEventListener('click', () => {
        clearContent();
        loadHome();
    });


    document.getElementById('menu-btn').addEventListener('click', () => {
        clearContent();
        loadMenu();
    });

    document.getElementById('contact-btn').addEventListener('click', () => {
        clearContent();
        loadContact();
    });
}

window.addEventListener('DOMContentLoaded', () => {
    setupNav();
    loadHome();
});