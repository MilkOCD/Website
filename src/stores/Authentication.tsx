import { makeObservable, observable, action } from 'mobx';
import Base from '../utils/Base';

class Authentication {
    localUser: string = '';

    username: string;

    password: string;

    constructor() {
        makeObservable(this, {
            username: observable,
            password: observable,
            login: action,
            logout: action
        });
    }

    login = (target: JSX.Element) => {};

    logout = () => {};
}

export default new Authentication();
