export class BibliographicMaterial {
    constructor(id, type, title, author, topic, sizeContent, typeContent) {
        this._id = id;
        this._type = type;
        this._title = title;
        this._author = author;
        this._topic = topic;
        this._sizeContent = sizeContent;
        this._typeContent = typeContent;
    }
    // constructor(private _title: string, private _description: string, private _theme: string, private _extension: string, private _author: string){}
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get type() {
        return this._type;
    }
    set type(type) {
        this._type = type;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get author() {
        return this._author;
    }
    set author(author) {
        this._author = author;
    }
    get topic() {
        return this._topic;
    }
    set topic(topic) {
        this._topic = topic;
    }
    get sizeContent() {
        return this._sizeContent;
    }
    set sizeContent(sizeContent) {
        this._sizeContent = sizeContent;
    }
    get typeContent() {
        return this._typeContent;
    }
    set typeContent(typeContent) {
        this._typeContent = typeContent;
    }
    clone() {
        return new BibliographicMaterial(this.id, this._type, this._title, this._author, this._topic, this._sizeContent, this._typeContent);
    }
}
