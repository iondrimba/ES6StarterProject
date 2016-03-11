import template from '../../../src/templates/master.html';
import HomeModel from '../models/home-model';
import Header from './header';
import Menu from './menu';
import Footer from './footer';

class Master {
    constructor(app) {
        this.app = app;
        this.model = new HomeModel();
    }

    setup() {
        this.header = new Header(this.app);
        this.menu = new Menu(this.app);
        this.footer = new Footer(this.app);
    };

    view() {
        this.model.headerView = this.header.view();
        this.model.menuView = this.menu.view();
        this.model.footerView = this.footer.view();

        let view = this.app.compile(template);
        view = view(this.model);
        return view;
    };
    render() {

        this.header.render();

        this.menu.render();

        this.footer.render();
    };
    destroy() {};
};


export default Master;