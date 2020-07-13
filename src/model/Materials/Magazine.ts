import { BibliographicMaterial } from '../BibliographicMaterial.js'

export class Magazine extends BibliographicMaterial{

    constructor(
        id: string,
        title: string,
        author: string,
        topic: string,
        sizeContent: string,
        typeContent: string,
        )
        {
            super(id, 'Magazine', title, author, topic, sizeContent, typeContent)

        }
        clone = () => {
            return new Magazine(
                this.id,
                this.title,
                this.author,
                this.topic,
                this.sizeContent,
                this.typeContent,
                )
        }
}