import { Book } from '../model/Materials/Book.js';
import { Magazine } from '../model/Materials/Magazine.js';
import { CD } from '../model/Materials/CD.js';
import { Thesis } from '../model/Materials/Thesis.js';
let baseAtribute = '';
// Books
let bookBase = new Book(baseAtribute, baseAtribute, baseAtribute, baseAtribute, baseAtribute, baseAtribute);
let book01 = bookBase.clone();
book01.id = '0';
book01.title = 'Fundamentos de Programaciòn';
book01.author = 'L. Joyanes';
book01.topic = 'Programaciòn';
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
// Magazines
let magazineBase = new Magazine(baseAtribute, baseAtribute, baseAtribute, baseAtribute, baseAtribute, baseAtribute);
let magazine01 = magazineBase.clone();
magazine01.id = '3';
magazine01.title = 'Magazine-01';
magazine01.author = 'Author-01';
magazine01.topic = 'Topic-01';
magazine01.sizeContent = '21';
magazine01.typeContent = 'pag.';
let magazine02 = magazineBase.clone();
magazine02.id = '4';
magazine02.title = 'Magazine-02';
magazine02.author = 'Author-02';
magazine02.topic = 'Topic-02';
magazine02.sizeContent = '16';
magazine02.typeContent = 'pag.';
let magazine03 = magazineBase.clone();
magazine03.id = '5';
magazine03.title = 'Magazine-03';
magazine03.author = 'Author-03';
magazine03.topic = 'Topic-03';
magazine03.sizeContent = '25';
magazine03.typeContent = 'pag.';
// CDs
let CDBase = new CD(baseAtribute, baseAtribute, baseAtribute, baseAtribute, baseAtribute, baseAtribute);
let CD01 = CDBase.clone();
CD01.id = '6';
CD01.title = 'CD-01';
CD01.author = 'Author-01';
CD01.topic = 'Topic-01';
CD01.sizeContent = '450';
CD01.typeContent = 'MB';
let CD02 = CDBase.clone();
CD02.id = '7';
CD02.title = 'CD-02';
CD02.author = 'Author-02';
CD02.topic = 'Topic-02';
CD02.sizeContent = '623';
CD02.typeContent = 'MB';
let CD03 = CDBase.clone();
CD03.id = '8';
CD03.title = 'CD-03';
CD03.author = 'Author-03';
CD03.topic = 'Topic-03';
CD03.sizeContent = '513';
CD03.typeContent = 'MB';
// Thesis
let ThesisBase = new Thesis(baseAtribute, baseAtribute, baseAtribute, baseAtribute, baseAtribute, baseAtribute);
let thesis01 = ThesisBase.clone();
thesis01.id = '9';
thesis01.title = 'thesis-01';
thesis01.author = 'Author-01';
thesis01.topic = 'Topic-01';
thesis01.sizeContent = '87';
thesis01.typeContent = 'pag.';
let thesis02 = ThesisBase.clone();
thesis02.id = '10';
thesis02.title = 'thesis-02';
thesis02.author = 'Author-02';
thesis02.topic = 'Topic-02';
thesis02.sizeContent = '121';
thesis02.typeContent = 'pag.';
let thesis03 = ThesisBase.clone();
thesis03.id = '11';
thesis03.title = 'thesis-03';
thesis03.author = 'Author-03';
thesis03.topic = 'Topic-03';
thesis03.sizeContent = '79';
thesis03.typeContent = 'pag.';
// All
export let books = [
    book01,
    book02,
    book03,
];
export let magazines = [
    magazine01,
    magazine02,
    magazine03,
];
export let CDs = [
    CD01,
    CD02,
    CD03,
];
export let thesis = [
    thesis01,
    thesis02,
    thesis03,
];
export let allMaterials = [
    ...books,
    ...magazines,
    ...CDs,
    ...thesis,
];
