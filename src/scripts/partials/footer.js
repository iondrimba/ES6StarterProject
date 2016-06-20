import template from '../../../src/templates/footer.html';
import FooterModel from '../models/footer-model';

class Footer {
    constructor(app) {
        this.app = app;
        this.model = new FooterModel();
    }
    view() {
        let view = this.app.compile(template);
        view = view(this.model);
        return view;
    }
    render() {}
}

export default Footer;