import { Book } from '../model/Materials/Book.js';
import { Magazine } from '../model/Materials/Magazine.js';
import { CD } from '../model/Materials/CD.js';
import { Thesis } from '../model/Materials/Thesis.js';
let baseAtribute = '';
// Books
let bookBase = new Book(baseAtribute, baseAtribute, baseAtribute, baseAtribute, baseAtribute, baseAtribute);
let book01 = bookBase.clone();
book01.id = '0';
book01.title = 'F. de Programación';
book01.author = 'L. Joyanes';
book01.topic = 'Programación';
book01.sizeContent = '200';
book01.typeContent = 'pag.';
let book02 = bookBase.clone();
book02.id = '1';
book02.title = 'Matemática Básica';
book02.author = 'E. Espinoza';
book02.topic = 'Matemática';
book02.sizeContent = '244';
book02.typeContent = 'pag.';
let book03 = bookBase.clone();
book03.id = '2';
book03.title = 'La Divina Comedia';
book03.author = 'D. Aliguieri';
book03.topic = 'Literatura';
book03.sizeContent = '200';
book03.typeContent = 'pag.';
let book04 = bookBase.clone();
book04.id = '3';
book04.title = 'Guía del PMBOK';
book04.author = 'PMI';
book04.topic = 'G. de Proyectos';
book04.sizeContent = '162';
book04.typeContent = 'pag.';
// Magazines
let magazineBase = new Magazine(baseAtribute, baseAtribute, baseAtribute, baseAtribute, baseAtribute, baseAtribute);
let magazine01 = magazineBase.clone();
magazine01.id = '4';
magazine01.title = 'Revista Peruana de Biología';
magazine01.author = 'UNMSM';
magazine01.topic = 'Biología';
magazine01.sizeContent = '21';
magazine01.typeContent = 'pag.';
let magazine02 = magazineBase.clone();
magazine02.id = '5';
magazine02.title = 'Gestión en el Tercer Milenio';
magazine02.author = 'UNMSM';
magazine02.topic = 'Administración';
magazine02.sizeContent = '16';
magazine02.typeContent = 'pag.';
let magazine03 = magazineBase.clone();
magazine03.id = '6';
magazine03.title = 'Arqueología y Sociedad';
magazine03.author = 'UNMSM';
magazine03.topic = 'Arqueología';
magazine03.sizeContent = '25';
magazine03.typeContent = 'pag.';
let magazine04 = magazineBase.clone();
magazine04.id = '7';
magazine04.title = 'Escritura y Pensamiento';
magazine04.author = 'UNMSM';
magazine04.topic = 'Ciencias Humanas';
magazine04.sizeContent = '31';
magazine04.typeContent = 'pag.';
// CDs
let CDBase = new CD(baseAtribute, baseAtribute, baseAtribute, baseAtribute, baseAtribute, baseAtribute);
let CD01 = CDBase.clone();
CD01.id = '8';
CD01.title = 'Dermatología Clínica';
CD01.author = 'Ferrándiz, Carlos';
CD01.topic = 'Medicina';
CD01.sizeContent = '450';
CD01.typeContent = 'MB';
let CD02 = CDBase.clone();
CD02.id = '9';
CD02.title = 'El Mundo del Arte';
CD02.author = 'Océano';
CD02.topic = 'Arte';
CD02.sizeContent = '623';
CD02.typeContent = 'MB';
let CD03 = CDBase.clone();
CD03.id = '10';
CD03.title = 'Diccionario Crítico';
CD03.author = 'Corominas, Joan';
CD03.topic = 'Letras';
CD03.sizeContent = '513';
CD03.typeContent = 'MB';
let CD04 = CDBase.clone();
CD04.id = '11';
CD04.title = 'Perú Enciclopedia';
CD04.author = 'El Comercio';
CD04.topic = 'Historia';
CD04.sizeContent = '513';
CD04.typeContent = 'MB';
// Thesis
let ThesisBase = new Thesis(baseAtribute, baseAtribute, baseAtribute, baseAtribute, baseAtribute, baseAtribute);
let thesis01 = ThesisBase.clone();
thesis01.id = '12';
thesis01.title = 'El periodismo en español en EEUU';
thesis01.author = 'Hidalgo Mejía, Juan Antonio';
thesis01.topic = 'Periodismo';
thesis01.sizeContent = '87';
thesis01.typeContent = 'pag.';
let thesis02 = ThesisBase.clone();
thesis02.id = '13';
thesis02.title = 'Diseño hidráulico de la bocatoma Amara';
thesis02.author = 'Tafur Garro, Fernando';
thesis02.topic = 'Ingeniería';
thesis02.sizeContent = '121';
thesis02.typeContent = 'pag.';
let thesis03 = ThesisBase.clone();
thesis03.id = '14';
thesis03.title = 'El Peligro procesal en la prisión preventiva';
thesis03.author = 'Silva Astete, Mario Hugo';
thesis03.topic = 'Derecho';
thesis03.sizeContent = '79';
thesis03.typeContent = 'pag.';
let thesis04 = ThesisBase.clone();
thesis04.id = '15';
thesis04.title = 'Ensayo de un motor diesel';
thesis04.author = 'Cruz Espinoza, Pool';
thesis04.topic = 'Derecho';
thesis04.sizeContent = '79';
thesis04.typeContent = 'pag.';
// All
export let books = [
    book01,
    book02,
    book03,
    book04,
];
export let magazines = [
    magazine01,
    magazine02,
    magazine03,
    magazine04,
];
export let CDs = [
    CD01,
    CD02,
    CD03,
    CD04,
];
export let thesis = [
    thesis01,
    thesis02,
    thesis03,
    thesis04,
];
export let allMaterials = [
    ...books,
    ...magazines,
    ...CDs,
    ...thesis,
];
