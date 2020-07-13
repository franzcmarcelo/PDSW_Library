import { BibliographicMaterial } from '../BibliographicMaterial.js';
export class Thesis extends BibliographicMaterial {
    constructor(id, title, author, topic, sizeContent, typeContent) {
        super(id, 'Thesis', title, author, topic, sizeContent, typeContent);
        this.clone = () => {
            return new Thesis(this.id, this.title, this.author, this.topic, this.sizeContent, this.typeContent);
        };
    }
}
