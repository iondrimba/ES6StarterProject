import HomeModel from '../src/scripts/models/home-model.js';
import AboutModel from '../src/scripts/models/about-model.js';
import ContactModel from '../src/scripts/models/contact-model.js';
import NotFoundModel from '../src/scripts/models/notfound-model.js';

describe('src/scripts/core - Controller Tests', () => {

    it('App should be defined ', () => {
        expect(app).toBeDefined();
    });

    it('should navigate to home page', () => {
        let model = new HomeModel();
        app.controller.navigate('/');
        expect(app.controller.current.model.title).toEqual(model.title);
    });

    it('should navigate to about page', () => {
        let model = new AboutModel();
        app.controller.navigate('/about');
        expect(app.controller.current.model.title).toEqual(model.title);
    });

    it('should navigate to contact page', () => {
        let model = new ContactModel();
        app.controller.navigate('/contact');
        expect(app.controller.current.model.title).toEqual(model.title);
    });
    it('should navigate to not found page', () => {
        let model = new NotFoundModel();
        app.controller.navigate('/---');
        expect(app.controller.current.model.title).toEqual(model.title);
    });
    it('should throw exeption', () => {
        expect(() => {
            app.controller.navigate();
        }).toThrow();
    });
    it('should have no content - controller.exit', () => {
        app.controller.navigate('/');
        app.controller.empty();
        let contentChildren = app.controller.content.find('div').length;
        expect(contentChildren).toEqual(0);
    });
    it('should have a H6 as content - controller.add(html) ', () => {
        app.controller.navigate('/');
        app.controller.add('<h6>Hello</h6>');
        let contentChildren = app.controller.content.find('h6').length;
        expect(contentChildren).toEqual(1);
    });

    it('should have called click on Home', () => {
        app.controller.navigate('/');
        spyOn(app.controller.current, 'click');
        app.controller.current.click();
        expect(app.controller.current.click).toHaveBeenCalled();
    });

    it('should have called animateInComplete after navigate to Contact ', (done) => {
        spyOn(app.controller, 'animateInComplete');
        app.controller.navigate('/contact');

        let timeout = setTimeout(() => {
            expect(app.controller.animateInComplete).toHaveBeenCalled();
            clearTimeout(timeout);
            done();
        }, 1000);
    });

    it('should have called animateInComplete after navigate to Home', (done) => {
        spyOn(app.controller, 'animateInComplete');
        app.controller.navigate('/');

        let timeout = setTimeout(() => {
            expect(app.controller.animateInComplete).toHaveBeenCalled();
            clearTimeout(timeout);
            done();
        }, 1000);
    });


    it('should have called animateInComplete after navigate to About', (done) => {
        spyOn(app.controller, 'animateInComplete');
        app.controller.navigate('/about');

        let timeout = setTimeout(() => {
            expect(app.controller.animateInComplete).toHaveBeenCalled();
            clearTimeout(timeout);
            done();
        }, 1000);
    });

    it('should have called animateInComplete after navigate to NotFound', (done) => {
        spyOn(app.controller, 'animateInComplete');
        app.controller.navigate('/---');

        let timeout = setTimeout(() => {
            expect(app.controller.animateInComplete).toHaveBeenCalled();
            clearTimeout(timeout);
            done();
        }, 1000);
    });

});