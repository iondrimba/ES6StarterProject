import BaseModel from './base-model';

class ContactModel extends BaseModel {
    constructor() {
        super();
        this.title = 'Contact';
    }
    set title(string) {
        super.title = string;
    }
    get title() {
        return super.title;
    }
};

export default ContactModel;