class BaseView {

    constructor(app) {
        this._title = '';
        this.app = app;
        const animationDuration = 500;
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
        }, BaseView.animationDuration);
    }
}

export default BaseView;