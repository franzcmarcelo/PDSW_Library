import { Book } from '../Materials/Book.js';
import { Magazine } from '../Materials/Magazine.js';
import { CD } from '../Materials/CD.js';
import { Thesis } from '../Materials/Thesis.js';
let book01 = new Book('0', 'Fundamentos de Programaciòn', 'L. Joyanes', 'Programaciòn', '200', 'pag.');
let book02 = new Book('1', 'Matemática Básica', 'Espinoza', 'E. Matemática', '244', 'pag.');
let book03 = new Book('2', 'La Divina Comedia', 'D. Aliguieri', 'Programaciòn', '200', 'pag.');
let magazine01 = new Magazine('3', 'Magazine-01', 'Author-01', 'Topic-01', '21', 'pag.');
let magazine02 = new Magazine('4', 'Magazine-02', 'Author-02', 'Topic-02', '16', 'pag.');
let magazine03 = new Magazine('5', 'Magazine-03', 'Author-03', 'Topic-03', '25', 'pag.');
let CD01 = new CD('6', 'CD-01', 'Author-01', 'Topic-01', '450', 'MB');
let CD02 = new CD('7', 'CD-02', 'Author-02', 'Topic-02', '623', 'MB');
let CD03 = new CD('8', 'CD-03', 'Author-03', 'Topic-03', '513', 'MB');
let thesis01 = new Thesis('9', 'thesis-01', 'Author-01', 'Topic-01', '87', 'pag.');
let thesis02 = new Thesis('10', 'thesis-02', 'Author-02', 'Topic-02', '121', 'pag.');
let thesis03 = new Thesis('11', 'thesis-03', 'Author-03', 'Topic-03', '79', 'pag.');
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
