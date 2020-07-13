import { BibliographicMaterial } from '../BibliographicMaterial.js';
export class CD extends BibliographicMaterial {
    constructor(id, title, author, topic, sizeContent, typeContent) {
        super(id, 'CD', title, author, topic, sizeContent, typeContent);
        this.clone = () => {
            return new CD(this.id, this.title, this.author, this.topic, this.sizeContent, this.typeContent);
        };
    }
}
