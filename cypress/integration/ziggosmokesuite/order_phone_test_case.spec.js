/// <reference types="cypress" />

describe('OrderAItemFromHomePage', function () {

    before(function () {
        cy.fixture('input_data').then(function (data) {
            this.data = data
        })
    })

    it('Visit the vodafone.nl Home page and order iphone11 yellow colour', function () {

        cy.addtocart(this.data.app_url,this.data.dashboard_title_message,this.data.pick_a_phone_message,this.data.phone_title)

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
        cy.applicationdataandnumberporting(this.data.Familiesamenstelling,this.data.m_status,this.data.housing_cost,
            this.data.net_income,this.data.number_porting_page_title,this.data.phone_title)
    
    }

    )

})