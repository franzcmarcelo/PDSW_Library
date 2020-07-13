import { books } from '../Clones/Clones.js';
import { prestamo, devoler } from '../index.js';
import { user } from '../index.js';
let $card = document.querySelector('#card');
let title = document.createElement('h1');
let $matPres = document.querySelector('#matPrestado');
export function renderPrestamo() {
    if (user.borrowedMaterial === undefined) {
        title.textContent = 'Aun no hay materiales prestados';
    }
    else {
        title.textContent = user.borrowedMaterial.title;
        $matPres.appendChild(title);
    }
}
function renderBooks() {
    for (const i of books) {
        let title = document.createElement('li');
        title.textContent = i.title;
        $card.appendChild(title);
        let btnPrestar = document.createElement('button');
        btnPrestar.textContent = 'Solicitar Prestamo';
        btnPrestar.setAttribute('identificador', `${i.id}`);
        btnPrestar.addEventListener('click', prestamo);
        title.appendChild(btnPrestar);
        let btnDevolver = document.createElement('button');
        btnDevolver.textContent = 'Devolver';
        btnDevolver.setAttribute('identificador', `${i.id}`);
        btnDevolver.addEventListener('click', devoler);
        title.appendChild(btnDevolver);
    }
}
export function render() {
    renderBooks();
    // renderCDs();
    // renderMagazines();
    // renderThesis();
}
