import page from '../../node_modules/page/page';
import handlebars from '../../node_modules/handlebars/dist/handlebars';
import jquery from '../../node_modules/jquery/dist/jquery';
import Controller from './core/controller';


class App {
    constructor() {
            this.$ = jquery;
            this.router = page;
            this.handlebars = handlebars;
            this.controller = new Controller(this);
            this.controller.start();
        }
        //encapsulating template engine so its easy to change
    compile(template) {
        return this.handlebars.compile(template);
    }
}

window.app = new App();