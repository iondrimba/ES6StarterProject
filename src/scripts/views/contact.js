import template from '../../../src/templates/contact.html';
import ContactModel from '../models/contact-model';
import BaseView from '../core/baseView';

class Contact extends BaseView {
    constructor(app) {
        super(app);
        this.model = new ContactModel();
    };
    view() {
        return super.view(template, this.model);
    };
    title() {
        return super.title;
    };
    render() {};
    destroy() {

    };
    animateIn(complete) {
        this.app.controller.content.addClass('content-show');
        super.animateIn(complete);
    };
};


export default Contact;