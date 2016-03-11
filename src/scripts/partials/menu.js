import template from '../../../src/templates/menu.html';
import MenuModel from '../models/menu-model';

class Menu {
    constructor(app) {
        this.app = app;
        this.model = new MenuModel();
    }
    view() {
        let view = this.app.compile(template);
        view = view(this.model);
        return view;
    };
    render() {

    };
};


export default Menu;