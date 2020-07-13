import { BibliographicMaterial } from '../BibliographicMaterial.js'

export class Thesis extends BibliographicMaterial{

    constructor(
        id: string,
        title: string,
        author: string,
        topic: string,
        sizeContent: string,
        typeContent: string,
        )
        {
            super(id, 'Thesis', title, author, topic, sizeContent, typeContent)

        }
        clone = () => {
            return new Thesis(
                this.id,
                this.title,
                this.author,
                this.topic,
                this.sizeContent,
                this.typeContent,
                )
        }
}