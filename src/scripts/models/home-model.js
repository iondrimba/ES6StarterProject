import BaseModel from './base-model';

class HomeModel extends BaseModel {
    constructor() {
        super();
        this.title = 'Home';
    }
    set title(string) {
        super.title = string;
    }
    get title() {
        return super.title;
    }
}

export default HomeModel;