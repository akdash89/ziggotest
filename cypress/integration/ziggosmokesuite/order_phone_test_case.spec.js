/// <reference types="cypress" />

describe('OrderAItemFromHomePage', function () {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('Visit the vodafone.nl Home page and verify title of the page', function () {

        cy.addtocart(this.data.app_url, this.data.dashboard_title_message, this.data.pick_a_phone_message)

        //file the personal data Email
        cy.filldataform(this.data.email_id,
            this.data.first_name,
            this.data.last_name,
            this.data.date_of_birth,
            this.data.cell_phone_number,
            this.data.contracting_party_no_msg,
            this.data.resident_country_name,
            this.data.resident_country_value,
            this.data.postal_code,
            this.data.house_no,
            this.data.street_name,
            this.data.id_country_code,
            this.data.id_type,
            this.data.id_value,
            this.data.id_number,
            this.data.id_expiry_date,
            this.data.bank_account_number)
        
        //Data Application
        cy.get('[data-testid=loan-details--family-type-selector]')
            .select('Alleenstaand').should('have.value', 'Single')

        cy.get('[data-testid=loan-details--housing-costs]').type('500')
        cy.get('#loan_details_income').type('4800')
        cy.get('[data-testid=loan-details--submit-button]').click()
        //Number porting No

        cy.get('.js-product-name').contains('Apple iPhone 11 64GB Yellow met Red Essential 2 jaar')
        cy.get('[data-testid=number-porting--next-step-btn]').click()
        

        //verify all details in over view page later
    
    }

    )

})