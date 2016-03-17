import template from '../../../src/templates/header.html';
import HeaderModel from '../models/header-model';

class Header {
    constructor(app) {
        this.app = app;
        this.model = new HeaderModel();
    }
    view() {
        let view = this.app.compile(template);
        view = view(this.model);
        return view;
    }
    render() {}
}

export default Header;