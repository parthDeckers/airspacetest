import * as loginAction from '../component/loginAction';
describe('Login - Valid Login', () => {
    it('User logs in from login page', function () {
        loginAction.validLogin();
    });
});