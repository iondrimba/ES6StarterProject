class BaseView {

    constructor(app) {
        this._title = '';
        this.app = app;
        this.animationDuration = 500;
    }
    view(template, model) {
        let view = this.app.compile(template);
        view = view(model);
        return view;
    }
    set title(string) {
        this._title = string;
    }
    get title() {
        return this._title;
    }
    render() {

    }
    destroy() {

    }
    animateIn(complete) {
        let timeout = setTimeout(()=> {
            clearTimeout(timeout);
            complete();
        }, this.animationDuration);
    }
}

export default BaseView;