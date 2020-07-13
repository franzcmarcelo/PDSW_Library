import { BibliographicMaterial } from '../BibliographicMaterial.js';
export class Magazine extends BibliographicMaterial {
    constructor(id, title, author, topic, sizeContent, typeContent) {
        super(id, 'Magazine', title, author, topic, sizeContent, typeContent);
        this.clone = () => {
            return new Magazine(this.id, this.title, this.author, this.topic, this.sizeContent, this.typeContent);
        };
    }
}
