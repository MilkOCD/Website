import { observable } from 'mobx';

class LoginModel {
    userNameOrEmailAddress!: string;

    password!: string;

    @observable rememberMe!: boolean;

    toggleRememberMe = () => {
        this.rememberMe = !this.rememberMe;
    };
}

export default LoginModel;
