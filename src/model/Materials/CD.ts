import { BibliographicMaterial } from '../BibliographicMaterial.js'

export class CD extends BibliographicMaterial{

    constructor(
        id: string,
        title: string,
        author: string,
        topic: string,
        sizeContent: string,
        typeContent: string,
        )
        {
            super(id, 'CD', title, author, topic, sizeContent, typeContent)

        }
        clone = () => {
            return new CD(
                this.id,
                this.title,
                this.author,
                this.topic,
                this.sizeContent,
                this.typeContent,
                )
        }
}