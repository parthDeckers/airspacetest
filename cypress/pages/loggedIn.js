
/**
 * This function insure that user is logged in
 * 
 * Can see success message and log out button
 */
export function checkUserIsLoggedIn() {
    cy.contains('You logged into a secure area!').should('be.visible');
    cy.contains('Logout').should('be.visible');
    cy.url().should('include', '/secure');
}

/**
 * This fucntion clicks log out
 */
export function clickLogout() {
    cy.get('[href="/logout"]').click();
}

/**
 * This function checks to make sure user is logged out and back in login screen
 */
export function checkLogOutMessege() {
    cy.contains('You logged out of the secure area!').should('be.visible');
    cy.url().should('include', '/login');
}