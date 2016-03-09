'use strict';

import HomeModel from '../src/scripts/models/home-model.js';

describe('HomeModel', () => {

	let model = new HomeModel();

    it('should match title with "Home"', ()=> {
        expect(model.title).toEqual('Home');
    });
});