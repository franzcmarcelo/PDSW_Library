import { BibliographicMaterial } from '../BibliographicMaterial.js';
export class Book extends BibliographicMaterial {
    constructor(id, title, author, topic, sizeContent, typeContent) {
        super(id, 'Book', title, author, topic, sizeContent, typeContent);
        this.clone = () => {
            return new Book(this.id, this.title, this.author, this.topic, this.sizeContent, this.typeContent);
        };
    }
}
