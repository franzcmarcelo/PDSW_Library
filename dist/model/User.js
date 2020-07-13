export class User {
    constructor(name, code, faculty, borrowedMaterial) {
        this._name = name;
        this._code = code;
        this._faculty = faculty;
        this._borrowedMaterial = borrowedMaterial || undefined;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get code() {
        return this._code;
    }
    set code(code) {
        this._code = code;
    }
    get faculty() {
        return this._faculty;
    }
    set faculty(faculty) {
        this._faculty = faculty;
    }
    get borrowedMaterial() {
        return this._borrowedMaterial;
    }
    set borrowedMaterial(borrowedMaterial) {
        this._borrowedMaterial = borrowedMaterial;
    }
}
