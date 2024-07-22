describe('Site Saucedemo.com', () => {


    //Login with wrong username or password - Error message test
    it('Error message when username or password is wrong', () => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('#user-name').type('user');
        cy.get('#password').type('secret_sauce').type('{enter}');

        cy.get('[data-test="error"]').should('be.visible');
    })


    //Login test
    it('Login test', () => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce').type('{enter}');

        cy.get('[data-test="logout-sidebar-link"]').should('exist').log('Login successful');
    })


    //Logout test
    it('Logout test', () => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce').type('{enter}');
        cy.get('#react-burger-menu-btn').click();

        cy.get('[data-test="logout-sidebar-link"]').should('exist').click().log('Logout successful');
    })


    //Side menu test
    it('Side menu test', () => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce').type('{enter}');
        cy.get('#react-burger-menu-btn').click();

        cy.get('#react-burger-cross-btn').should('exist').click();
    })


    //Add product to cart test
    it('Add product to cart test', () => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce').type('{enter}');
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();

        cy.get('[data-test="inventory-item"]').should('exist');
    })


    //Delete product from cart test
    it('Delete product from cart test', () => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce').type('{enter}');
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        
        cy.get('[data-test="shopping-cart-link"]').should('be.empty');
    })


    //Placing order test
    it('Placing order test', () => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce').type('{enter}');
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('Andrei');
        cy.get('[data-test="lastName"]').type('Butnaru');
        cy.get('[data-test="postalCode"]').type('617250');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();

        cy.get('[data-test="checkout-complete-container"]').should('exist');
    })


    //Product details test
    it('Product details test', () => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce').type('{enter}');
        cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]').click();

        cy.get('[data-test="inventory-container"]').should('exist').and('be.visible');
    })


    //"Back to products" button test
    it('"Back to products" button test', () => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce').type('{enter}');
        cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]').click();
        cy.get('[data-test="back-to-products"]').click();

        cy.get('[data-test="inventory-list"]').should('exist');  
    })

})