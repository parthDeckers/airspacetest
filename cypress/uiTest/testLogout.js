import * as loginAction from '../component/loginAction';
describe('Logout - Valid Log out', () => {
    it('User logs out and ensure that page navigates back to login page', function () {
        loginAction.logout();
    });
});