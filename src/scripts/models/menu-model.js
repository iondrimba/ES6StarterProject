import BaseModel from './base-model';

class MenuModel extends BaseModel {
    constructor() {
        super();
        this.links = [
            {
                label: 'Home',
                href: '/'
            },
            {
                label: 'Contact',
                href: '/contact'
            },
            {
                label: 'About',
                href: '/about'
            },
            {
                label: 'Not Found',
                href: '/---'
            }
        ];
    }
    set links(data) {
        return this._links = data;
    }
    get links() {
        return this._links;
    }
}

export default MenuModel;