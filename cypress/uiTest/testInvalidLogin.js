import * as loginAction from '../component/loginAction';

describe('Login - Invalid Login', () => {
    it('User enters wrong user name but correct password', function () {
        loginAction.invalidLogin(true, false)
    });

    it('User enters correct user name but incorrct passowrd', function () {
        loginAction.invalidLogin(false, true)
    });

    it('User enters username/password wrong', function () {
        loginAction.invalidLogin(true, true);
    });

    it('User enters nothing and trys to log in', function () {
        loginAction.invalidLogin(false, false);
    });
});