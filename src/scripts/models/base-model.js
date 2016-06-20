class BaseModel {
    constructor() {
        this._title = '';
    }
    set title(string) {
        this._title = string;
    }
    get title() {
        return this._title;
    }
}

export default BaseModel;