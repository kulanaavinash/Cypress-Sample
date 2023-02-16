///<reference types ="cypress"/>
it('verify Navigate the Url', () => {
    cy.visit('https://tb-ordernow.applova.io/webstore/BIZ_bzl44ebp8e4?session=1674456653646')

})
    // cy.contains('Google Search').click()

it('verify Product Add To Cart', () => {
    cy.visit('https://tb-ordernow.applova.io/webstore/BIZ_bzl44ebp8e4?session=1674456653646')
    cy.get('#CAT_38n452fi8e4 > .home-products > .overlay').click()

   //cy.get('#PRD_a1ht410dl9de > .link > .main-product_img > img').click()

   cy.get('#add2cart-button-PRD_67i452fh8e4').click()
   cy.get('[style="margin-left: 0; border: none; background-color: #FFFFFF"]').click()
   cy.get('#dropdownMenu1').click()
   cy.get('[data-variant-sku="a7g452fy8e4"] > a').click()
   cy.get('#add-to-cart-content > .modal-footer > #add-item-to-cart-button').click()
   cy.get('#add-to-cart-content > .modal-header > .close > .fa').click()

})

it('verify Proceed To Checkout', () => {
    cy.visit('https://tb-ordernow.applova.io/webstore/BIZ_bzl44ebp8e4?session=1674456653646')
    cy.get('#CAT_38n452fi8e4 > .home-products > .overlay').click()

   //cy.get('#PRD_a1ht410dl9de > .link > .main-product_img > img').click()

   cy.get('#add2cart-button-PRD_67i452fh8e4').click()
   cy.get('[style="margin-left: 0; border: none; background-color: #FFFFFF"]').click()
   cy.get('#dropdownMenu1').click()
   cy.get('[data-variant-sku="a7g452fy8e4"] > a').click()
   cy.get('#add-to-cart-content > .modal-footer > #add-item-to-cart-button').click()
   cy.get('#add-to-cart-content > .modal-header > .close > .fa').click()
   cy.get('#show-pickup-options-modal-button').click()

})

it('verify Sign in as Customer', () => {
    cy.visit('https://tb-ordernow.applova.io/webstore/BIZ_bzl44ebp8e4?session=1674456653646')
    cy.get('#CAT_38n452fi8e4 > .home-products > .overlay').click()

   //cy.get('#PRD_a1ht410dl9de > .link > .main-product_img > img').click()

   cy.get('#add2cart-button-PRD_67i452fh8e4').click()
   cy.get('[style="margin-left: 0; border: none; background-color: #FFFFFF"]').click()
   cy.get('#dropdownMenu1').click()
   cy.get('[data-variant-sku="a7g452fy8e4"] > a').click()
   cy.get('#add-to-cart-content > .modal-footer > #add-item-to-cart-button').click()
   cy.get('#add-to-cart-content > .modal-header > .close > .fa').click()
   cy.get('#show-pickup-options-modal-button').click()
   cy.get(':nth-child(1) > .col-md-12 > .common-btn').click()
   cy.get('#sign-in-username',{ timeout: 3000 }).type('avinash@gmail.com')
   cy.get('#sign-in-password',{ timeout: 3000 }).type('#2018K.a')
   cy.get('#sign-in-button',{ timeout: 5000 }).click()

})

it('verify Order Method', () => {
    cy.visit('https://tb-ordernow.applova.io/webstore/BIZ_bzl44ebp8e4?session=1674456653646')
    cy.get('#CAT_38n452fi8e4 > .home-products > .overlay').click()

   //cy.get('#PRD_a1ht410dl9de > .link > .main-product_img > img').click()

   cy.get('#add2cart-button-PRD_67i452fh8e4').click()
   cy.get('[style="margin-left: 0; border: none; background-color: #FFFFFF"]').click()
   cy.get('#dropdownMenu1').click()
   cy.get('[data-variant-sku="a7g452fy8e4"] > a').click()
   cy.get('#add-to-cart-content > .modal-footer > #add-item-to-cart-button').click()
   cy.get('#add-to-cart-content > .modal-header > .close > .fa').click()
   cy.get('#show-pickup-options-modal-button').click()
   cy.get(':nth-child(1) > .col-md-12 > .common-btn').click()
   cy.get('#sign-in-username',{ timeout: 3000 }).type('avinash@gmail.com')
   cy.get('#sign-in-password',{ timeout: 3000 }).type('#2018K.a')
   cy.get('#sign-in-button',{ timeout: 5000 }).click()

   cy.get('#show-pickup-options-modal-button').click()

   cy.get('.col-sm-12 > .pull-left > .sub-topic').click()

})

it('verify Special Istruction Input', () => {
    cy.visit('https://tb-ordernow.applova.io/webstore/BIZ_bzl44ebp8e4?session=1674456653646')
    cy.get('#CAT_38n452fi8e4 > .home-products > .overlay').click()

   //cy.get('#PRD_a1ht410dl9de > .link > .main-product_img > img').click()

   cy.get('#add2cart-button-PRD_67i452fh8e4').click()
   cy.get('[style="margin-left: 0; border: none; background-color: #FFFFFF"]').click()
   cy.get('#dropdownMenu1').click()
   cy.get('[data-variant-sku="a7g452fy8e4"] > a').click()
   cy.get('#add-to-cart-content > .modal-footer > #add-item-to-cart-button').click()
   cy.get('#add-to-cart-content > .modal-header > .close > .fa').click()
   cy.get('#show-pickup-options-modal-button').click()
   cy.get(':nth-child(1) > .col-md-12 > .common-btn').click()
   cy.get('#sign-in-username',{ timeout: 3000 }).type('avinash@gmail.com')
   cy.get('#sign-in-password',{ timeout: 3000 }).type('#2018K.a')
   cy.get('#sign-in-button',{ timeout: 5000 }).click()

   cy.get('#show-pickup-options-modal-button').click()

   cy.get('.col-sm-12 > .pull-left > .sub-topic').click()
   cy.get('#specialInstructions').type('Deliver it soon',{ timeout: 5000 })

   cy.get('#checkoutButton',{ timeout: 5000 }).click()

})

it('verify Payment Order', () => {
    cy.visit('https://tb-ordernow.applova.io/webstore/BIZ_bzl44ebp8e4?session=1674456653646')
    cy.get('#CAT_38n452fi8e4 > .home-products > .overlay').click()

   //cy.get('#PRD_a1ht410dl9de > .link > .main-product_img > img').click()

   cy.get('#add2cart-button-PRD_67i452fh8e4').click()
   cy.get('[style="margin-left: 0; border: none; background-color: #FFFFFF"]').click()
   cy.get('#dropdownMenu1').click()
   cy.get('[data-variant-sku="a7g452fy8e4"] > a').click()
   cy.get('#add-to-cart-content > .modal-footer > #add-item-to-cart-button').click()
   cy.get('#add-to-cart-content > .modal-header > .close > .fa').click()
   cy.get('#show-pickup-options-modal-button').click()
   cy.get(':nth-child(1) > .col-md-12 > .common-btn').click()
   cy.get('#sign-in-username',{ timeout: 3000 }).type('avinash@gmail.com')
   cy.get('#sign-in-password',{ timeout: 3000 }).type('#2018K.a')
   cy.get('#sign-in-button',{ timeout: 5000 }).click()

   cy.get('#show-pickup-options-modal-button').click()

   cy.get('.col-sm-12 > .pull-left > .sub-topic').click()
   cy.get('#specialInstructions').type('Deliver it soon',{ timeout: 5000 })

   cy.get('#checkoutButton',{ timeout: 5000 }).click()

   cy.get('#confirmCheckoutButton').click()
   
   cy.get('#pay-later-label').click()

  })