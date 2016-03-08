import BaseModel from './base-model.js';

class ContactModel extends BaseModel {
    constructor() {
        super();
        super.title = 'Contact';
    }
    set title(string) {
        super.title = string;
    }
    get title() {
        return super.title;
    }
};

export default ContactModel;