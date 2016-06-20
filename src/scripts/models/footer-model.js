import BaseModel from './base-model';

class FootertModel extends BaseModel {
    constructor() {
        super();
    }
    set title(string) {
        super.title = string;
    }
    get title() {
        return super.title;
    }
}

export default FootertModel;