//add to cart function

Cypress.Commands.add("addtocart", (url, dashboard_title_message, pick_a_phone_message) => {
    cy.visit(url)
    cy.get('.lgi_btn_3').click()
    cy.title().should('eq', dashboard_title_message)

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    cy.get('[data-testid=btn-telefoons]').click()
    //after clicking on phone button verify pick a phone page is displayed or not
    cy.get('h1').contains(pick_a_phone_message)
    cy.wait(5000)
    //verify apple button is enabled or not and click to display only apple phone
    cy.get('img[src*="logo-apple.png"]').click()
    //click on iphone 64 gb//a:contains("^apple-iphone-11-64gb$")
    cy.wait(5000)
    cy.get('[data-testid=vf-product--btn-cta--apple-iphone-11-64gb]').click()

    cy.on('window:confirm', function (confirmtext) {
    })

    cy.get('button').then(($btn) => {
        if ($btn.hasClass('vfz-button vfz-button--secondary')) {
            cy.get('[data-testid=vfz-button-converged-status-prompt--yes]').click()
            //select  colour of Iphone
            cy.get('[data-testid=vfz-color-selector--4] > .color-selector__inner-ball').click()
            //verify details amount later and click on next step
            cy.get('[data-testid=vfz-order-button]').click()
            cy.get('.vfz-button').contains('Ik wil een nieuw abonnement').click()

        } else if (cy.get('#ziggo-customer-popup-button-yes')) {
            cy.get('#ziggo-customer-popup-button-yes').click()
            cy.get('[data-testid=vf-product-device-options--variant-geel]').click()
            cy.get('.col-xs-12 > .btn').click()
            cy.get('#cucumber-selector-postpaid-device').click()
        } else {
            cy.get('[data-testid=vf-product-device-options--variant-geel]').click()
            cy.get('.col-xs-12 > .btn').click()
            cy.get('#cucumber-selector-postpaid-device').click()
        }
    })
    //cy.get('a#ziggo-customer-popup-button-yes').contains('Yes').click()   
    //cy.get('[data-testid=vfz-button-converged-status-prompt--yes]').click()
    //select  colour of Iphone
    //cy.get('[data-testid=vfz-color-selector--4] > .color-selector__inner-ball').click()
    //verify title of the page showing red colour or not
    //cy.get('[data-testid=regular-pdp--device-title]').contains('Apple iPhone 11 64GB Yellow')



    //handle popup order new subscription or renew
    //cy.get('.new-or-retention-modal__buttons > :nth-child(1)').click()

    //verify iphone 11 yellow text is displayed or not and also the amount is remain the same or not
    cy.get('.name').contains('Apple iPhone 11 64GB Yellow')

    //click on Next step button on add to cart page
    cy.get('[data-testid=cart-contracting-party--next-button]').click()
})

Cypress.Commands.add("filldataform", (emailid,
    first_name,
    last_name,
    date_of_birth,
    cell_phone_number,
    contracting_party_no_msg,
    resident_country_name,
    resident_country_value,
    postal_code,
    house_no,
    street_name,
    id_country_code,
    id_type,
    id_value,
    id_number,
    id_expiry_date,
    bank_account_number
) => {
    //file the personal data Email
    cy.get('#contracting_party_email').type(emailid)

    //select gender
    cy.get('[data-testid=contracting-party--gender-male]').click()
    //initials
    cy.get('[data-testid=contracting-party--initials]').type(first_name)
    //last name
    cy.get('[data-testid=contracting-party--last-name]').type(last_name)
    //birthdate
    cy.get('[data-testid=contracting-party--birthdate]').type(date_of_birth)

    cy.get('[data-testid=contracting-party--phone]').type(cell_phone_number)
    //cy.get(':nth-child(9) > .controls > p').contains(contracting_party_no_msg)
    //fill address //change all hardcoded value later
    cy.get('#contracting_party_invoice_address_country')
        .select(resident_country_name).should('have.value', resident_country_value)
    //enter postal code 
    cy.get('[data-testid=contracting-party--postal-code]').type(postal_code)
    cy.get('[data-testid=contracting-party--house-number]').type(house_no)
    cy.get('.prefilled-value').contains(street_name)
    cy.get('[data-testid=delivery-address--same-as-billing]').should('be.checked')

    //fill the id details 
    cy.get('#identity_nationality')
        .select(resident_country_name).should('have.value', id_country_code)

    cy.get('[data-testid=identity_identity_type]')
        .select(id_type).should('have.value', id_value)

    cy.get('[data-testid=identity_identity_number]').type(id_number)

    cy.get('[data-testid=identity_identity_expiry_date]').type(id_expiry_date)

    //payment details
    cy.get('#payment_details_account_nr').type(bank_account_number)
    //click on next button
    cy.get('[type=submit]').click()
    cy.wait(5000)

})
