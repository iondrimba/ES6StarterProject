import BaseModel from './base-model';

class AboutModel extends BaseModel {
    constructor() {
        super();
        this.title = 'About';
    }
    set title(string) {
        super.title = string;
    }
    get title() {
        return super.title;
    }
}

export default AboutModel;