//load all locators
const {
    acceptCookiesAtDashBoard, productPhone, iphoneImage, selectIphone64Gb, modalNewSubscription, popoupNewSubscription, modalSelectColourOfIphone, popoupSelectColourOfIphone,
    modalOrderButton, popupOrderButton, modalIwantNewSubscription, popupIwantNewSubscription, titleAppleIphone64GbYellow, cartContractingPartyNextBtn,
    fillEmailId, selectGenderRadioBtn, fillInitialName, fillLastName, fillDateOfBirth, fillContractingPartyCellPhoneNo,
    selectInvoiceAddressCountry, fillPostalCode, fillHouseNumber, fillIdentificationNo, verifyStreatName, verifyAddressSameAsBilling,
    selectNationality, selectIdentityType, fillIdExpiryDate, fillBankAccount, submitFormBtn, verifynumberportingPagetitle, selectFamilyType, fillHousingCost,
    fillNetincome, submitApplicationBtn, numbernextBtn
} = require('./all_page_locators');

Cypress.Commands.add("addtocart", (url, dashboard_title_message, pick_a_phone_message, verify_title) => {
    cy.visit(url)
    acceptCookiesAtDashBoard().click()
    cy.title().should('eq', dashboard_title_message)

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    productPhone().click()
    cy.get('h1').contains(pick_a_phone_message)
    cy.wait(5000)
    iphoneImage().click()
    cy.wait(5000)
    selectIphone64Gb().click()

    cy.on('window:confirm', function (confirmtext) {
    })

    cy.get('button').then(($btn) => {
        if ($btn.hasClass('vfz-button vfz-button--secondary')) {
            modalNewSubscription().click()
            modalSelectColourOfIphone().click()
            modalOrderButton().click()
            modalIwantNewSubscription().contains('Ik wil een nieuw abonnement').click()
            //add proper class name as above later
        } else if (popoupNewSubscription()) {
            popoupNewSubscription().click()
            popoupSelectColourOfIphone().click()
            popupOrderButton().click()
            popupIwantNewSubscription().click()
        } else {
            popoupSelectColourOfIphone().click()
            popupOrderButton().click()
            popupIwantNewSubscription().click()
        }
    })
    titleAppleIphone64GbYellow().contains(verify_title)
    cartContractingPartyNextBtn().click()
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
    fillEmailId().type(emailid)
    selectGenderRadioBtn().click()
    fillInitialName().type(first_name)
    fillLastName().type(last_name)
    fillDateOfBirth().type(date_of_birth)
    fillContractingPartyCellPhoneNo().type(cell_phone_number)
    selectInvoiceAddressCountry()
        .select(resident_country_name).should('have.value', resident_country_value)
    fillPostalCode().type(postal_code)
    fillHouseNumber().type(house_no)
    verifyStreatName().contains(street_name)
    verifyAddressSameAsBilling().should('be.checked')
    selectNationality()
        .select(resident_country_name).should('have.value', id_country_code)
    selectIdentityType()
        .select(id_type).should('have.value', id_value)
    fillIdentificationNo().type(id_number)
    fillIdExpiryDate().type(id_expiry_date)
    fillBankAccount().type(bank_account_number)
    submitFormBtn().click()
    cy.wait(5000)
})

Cypress.Commands.add("applicationdataandnumberporting", (Families_amen_stelling, m_status, housing_cost, net_income, number_porting_page_title, verify_title) => {
    selectFamilyType()
        .select(Families_amen_stelling).should('have.value', m_status)
    fillHousingCost().type(housing_cost)
    fillNetincome().type(net_income)
    submitApplicationBtn().click()
    verifynumberportingPagetitle().contains(number_porting_page_title)
    numbernextBtn().click()
    //add more to verify details of overview
    titleAppleIphone64GbYellow().contains(verify_title)
})
