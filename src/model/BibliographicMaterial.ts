export class BibliographicMaterial {

    private _id: string
    private _type: string;
    private _title: string;
    private _topic: string;
    private _sizeContent: string;
    private _typeContent: string;
    private _author: string;

    constructor(
        id: string,
        type: string,
        title: string,
        author: string,
        topic: string,
        sizeContent: string,
        typeContent: string
        ){
        this._id = id;
        this._type = type;
        this._title = title;
        this._author = author;
        this._topic = topic;
        this._sizeContent = sizeContent;
        this._typeContent = typeContent;
    }
    // constructor(private _title: string, private _description: string, private _theme: string, private _extension: string, private _author: string){}
    get id(): string{
        return this._id;
    }
    set id(id: string){
        this._id = id;
    }
    get type(): string{
        return this._type;
    }
    set type(type: string){
        this._type = type;
    }
    get title(): string{
        return this._title;
    }
    set title(title: string){
        this._title = title;
    }
    get author(): string{
        return this._author;
    }
    set author(author: string){
        this._author = author;
    }
    get topic(): string{
        return this._topic;
    }
    set topic(topic: string){
        this._topic = topic;
    }
    get sizeContent(): string{
        return this._sizeContent;
    }
    set sizeContent(sizeContent: string){
        this._sizeContent = sizeContent;
    }
    get typeContent(): string{
        return this._typeContent;
    }
    set typeContent(typeContent: string){
        this._typeContent = typeContent;
    }

    clone(){
        return new BibliographicMaterial(
            this.id,
            this._type,
            this._title,
            this._author,
            this._topic,
            this._sizeContent,
            this._typeContent,
            )
    }
}