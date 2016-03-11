import Master from '../partials/master';
import Home from '../views/home';
import Contact from '../views/contact';
import About from '../views/about';
import NotFound from '../views/notfound';

class Controller {
    constructor(app) {
        this.app = app;
        this.current;
    }
    start() {
        this.masterPage();

        this.app.router('/', this.prerender.bind(this), this.home.bind(this));
        this.app.router('/contact', this.prerender.bind(this), this.contact.bind(this));
        this.app.router('/about', this.prerender.bind(this), this.about.bind(this));
        this.app.router('*', this.notFound.bind(this));
        this.app.router.exit('*', this.exit.bind(this));
        this.app.router();
    };
    masterPage(ctx, next) {
        this.master = new Master(this.app);
        this.master.setup();
        this.app.$('body').html(this.master.view());
        this.master.render();
        this.content = this.app.$('.content');
    };
    navigate(path) {
        if (path === undefined) {
            throw new Error('invalid path::${path}');
        }
        this.app.router(path);
    };
    empty() {
        this.content.empty();
    };
    add(html) {
        this.content.html(html);
    };

    exit(ctx, next) {
        this.content.removeClass('content-show');
        this.empty();
        this.current.destroy();
        this.current = null;
        next();
    };
    masterPageUpdate() {
        document.title = this.current.title();
    };
    createView(View) {
        this.current = new View(this.app);
        this.add(this.current.view());
        this.current.render();
        this.masterPageUpdate();

        let timeout = setTimeout(()=> {
            this.current.animateIn(this.animateInComplete);
            clearTimeout(timeout);
        }, 10);
    };
    animateInComplete() {

    };
    prerender(ctx, next) {
        next();
    };
    home(ctx, next) {
        this.createView(Home);
    };
    contact(ctx, next) {
        this.createView(Contact);
    };
    about(ctx, next) {
        this.createView(About);
    };
    notFound(ctx, next) {
        this.createView(NotFound);
    };
};

export default Controller;