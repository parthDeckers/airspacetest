/// <reference types="cypress" />

/**
 * This fuction navigates to url
 * 
 * @param url - takes in url where user wants to navigate
 */
export function navigateTo(url) {
    cy.visit(url);
}

/**
 * this functions find log in button and clicks it
 */
export function clickLogin() {
    cy.get('[type="submit"]').click();
}

/**
 * this function checks log out message 
 */
export function checkLogOutMessege() {
    cy.contains('You logged out of the secure area!').should('be.visible');
}

/**
 * this function checks that invalid username message comes up
 */
export function checkUserNameError() {
    cy.contains('Your username is invalid!').should('be.visible');
}

export function checkPassError() {
    cy.contains('Your password is invalid!').should('be.visible');
}