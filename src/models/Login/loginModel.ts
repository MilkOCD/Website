import { observable } from 'mobx';

class LoginModel {
    userNameOrEmailAddress!: string;

    password!: string;

    @observable rememberMe!: boolean;

    constructor(userNameOrEmailAddress: string, password: string, rememberMe: boolean = false) {
        this.userNameOrEmailAddress = userNameOrEmailAddress;
        this.password = password;
        this.rememberMe = rememberMe;
    }

    toggleRememberMe = () => {
        this.rememberMe = !this.rememberMe;
    };
}

export default LoginModel;
