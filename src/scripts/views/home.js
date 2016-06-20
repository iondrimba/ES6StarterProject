import template from '../../../src/templates/home.html';
import HomeModel from '../models/home-model';
import BaseView from '../core/baseView';

class Home extends BaseView {
    constructor(app) {
        super(app);
        this.button = null;
        this.model = new HomeModel();
    }
    view() {
        return super.view(template, this.model);
    }
    title() {
        return super.title;
    }
    render() {
        this.button = this.app.$('.home').find('button');
        this.button.on('click', (evt) => this.click(evt));
    }
    click() {
        alert('Click');
    }
    destroy() {
        this.button.off('click');
        this.button = null;
        this.model = null;
    }
    animateIn(complete) {
        this.app.controller.content.addClass('content-show');
        super.animateIn(complete);
    }
}

export default Home;