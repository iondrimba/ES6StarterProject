import template from '../../../src/templates/notfound.html';
import NotFoundModel from '../models/notfound-model';
import BaseView from '../core/baseView';

class NotFound extends BaseView {
    constructor(app) {
        super(app);
        this.model = new NotFoundModel();
    }
    view() {
        return super.view(template, this.model);
    }
    title() {
        return super.title;
    }
    render() {}
    destroy() {}
    animateIn(complete) {
        this.app.controller.content.addClass('content-show');
        super.animateIn(complete);
    }
}

export default NotFound;