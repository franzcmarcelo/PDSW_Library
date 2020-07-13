import { BibliographicMaterial } from '../BibliographicMaterial';
export class Thesis extends BibliographicMaterial {
    constructor(id, type, title, topic, extension, author) {
        super(id, type, title, topic, extension, author);
    }
}
