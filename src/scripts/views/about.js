import template from '../../../src/templates/about.html';
import BaseView from '../core/baseView';
import AboutModel from '../models/about-model';

class About extends BaseView {
    constructor(app) {
        super(app);
        this.model = new AboutModel();
    };
    view() {
        return super.view(template, this.model);
    };
    title() {
        return super.title;
    };
    render() {
    };
    destroy() {
    };
    animateIn(complete) {
        this.app.controller.content.addClass('content-show');
        super.animateIn(complete);
    };
};

export default About;