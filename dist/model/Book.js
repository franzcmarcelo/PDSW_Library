import { BibliographicMaterial } from './BibliographicMaterial';
export class Book extends BibliographicMaterial {
    constructor(id, type, title, topic, extension, author) {
        super(id, type, title, topic, extension, author);
    }
}
