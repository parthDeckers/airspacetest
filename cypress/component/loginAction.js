import * as base from '../pages/base';
import * as loggedIn from '../pages/loggedIn';
import loginCreds from '../data/loginCreds.json';
import urls from '../data/urls.json'

/**
 * this function checks if user can log in using valid keys
 */
export function validLogin(){
    let userName = loginCreds.valid.userName;
    let passWord = loginCreds.valid.passWord;

    base.navigateTo(urls.baseUrl);
    cy.fillLogin(userName, passWord);
    base.clickLogin();
    loggedIn.checkUserIsLoggedIn();
}

/**
 * this function checks to make sure user cant log in
 * 
 * with invlid user or invalid pass or both or nothing
 * 
 * @param invalidUserFlag - True if user uses invalid username, false for valid user
 * @param invalidPassFlag - True if user uses invalid password, false for valide pass
 * 
 */
export function invalidLogin(invalidUserFlag=true, invalidPassFlag=true) {
    let invUserName = loginCreds.invalid.userName;
    let invPassWord = loginCreds.invalid.passWord;
    let valUserName = loginCreds.valid.userName;
    let valPassWord = loginCreds.valid.passWord;
    
    base.navigateTo(urls.baseUrl);

    if(invalidUserFlag && !invalidPassFlag) {
        cy.fillLogin(invUserName, valPassWord);
        base.clickLogin();
        base.checkUserNameError();
    }
    if(!invalidUserFlag && invalidPassFlag) {
        cy.fillLogin(valUserName, invPassWord);
        base.clickLogin();
        base.checkPassError();
    }
    if(invalidPassFlag && invalidUserFlag) {
        cy.fillLogin(invUserName, invPassWord);
        base.clickLogin();
        base.checkUserNameError();
    }
    //insure we dont log in without user or pass
    if(!invalidPassFlag && !invalidUserFlag) {
        base.clickLogin();
        base.checkUserNameError()
    } 
}

/**
 * This function logs out user and make sure that use has been logged out
 */
export function logout() {
    this.validLogin();
    loggedIn.clickLogout();
    loggedIn.checkLogOutMessege();
}
