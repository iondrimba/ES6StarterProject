import BaseModel from './base-model';

class MasterModel extends BaseModel {
    constructor() {
        super();
        this._headerView = '';
        this._menuView = '';
        this._footerView = '';
    }
    set title(string) {
        super.title = string;
    };
    get title() {
        return super.title;
    };
    set headerView(string) {
        this._headerView = string;
    };
    get headerView() {
        return this._headerView;
    };

    set menuView(string) {
        this._menuView = string;
    };
    get menuView() {
        return this._menuView;
    };
    set footerView(string) {
        this._footerView = string;
    };
    get footerView() {
        return this._footerView;
    };

};

export default MasterModel;