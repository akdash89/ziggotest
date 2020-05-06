// <reference types="Cypress" />

//ADD TO CART LOCATORS
const ACCEPT_COOKIES_AT_DASHBOARD = '.lgi_btn_3';
const PRODUCT_PHONE = '[data-testid=btn-telefoons]';
const CLICK_ON_IPHONE_IMAGE = 'img[src*="logo-apple.png"]';
const SELECT_IPHONE_64_GB = '[data-testid=vf-product--btn-cta--apple-iphone-11-64gb]';
const MODAL_NEW_SUBSCRIPTION = '[data-testid=vfz-button-converged-status-prompt--yes]';
const POPUP_NEW_SUBSCRIPTION = '#ziggo-customer-popup-button-yes';
const MODAL_SELECT_COLOUR_OF_IPHONE = '[data-testid=vfz-color-selector--4] > .color-selector__inner-ball'
const POPUP_SELECT_COLOUR_OF_IPHONE = '[data-testid=vf-product-device-options--variant-geel]';
const MODAL_ORDER_BUTTON = '[data-testid=vfz-order-button]';
const POPUP_ORDER_BUTTON = '.col-xs-12 > .btn';
const MODAL_I_WANT_NEW_SUBSCRIPTION = '.vfz-button';
const POPUP_I_WANT_NEW_SUBSCRIPTION = '#cucumber-selector-postpaid-device';
const TITLE_APPLE_IPHONE_11_64_GB_YELLOW = '.name'
const CART_CONTRACTING_PARTY_NEXT_BTN = '[data-testid=cart-contracting-party--next-button]';

//FILL DATA FORM LOCATORS
const FILL_EMAIL_ID = '#contracting_party_email';
const SELECT_GENDER_MALE_RADIO_BTN = '[data-testid=contracting-party--gender-male]';
const FILL_INITIAL_NAME = '[data-testid=contracting-party--initials]';
const FILL_LAST_NAME = '[data-testid=contracting-party--last-name]';
const FILL_DATE_OF_BIRTH = '[data-testid=contracting-party--birthdate]';
const FILL_CONTRACTING_PARTY_CELL_PHONE_NO = '[data-testid=contracting-party--phone]';
const SELECT_INVOIVE_ADDESS_COUNTRY = '#contracting_party_invoice_address_country';
const FILL_POSTAL_CODE = '[data-testid=contracting-party--postal-code]';
const FILL_HOUSE_NUMBER = '[data-testid=contracting-party--house-number]';
const VERIFY_STREAT_NAME = '.prefilled-value';
const VERIFY_ADDRESS_SAME_AS_BILLING = '[data-testid=delivery-address--same-as-billing]';
const SELECT_NATIONALITY = '#identity_nationality';
const SELECT_IDENTITY_TYPE = '[data-testid=identity_identity_type]';
const FILL_IDENTIFICATION_NUMBER = '[data-testid=identity_identity_number]';
const FILL_ID_EXPIRY_DATE = '[data-testid=identity_identity_expiry_date]';
const FILL_BANK_ACCOUNT_NUMBER = '#payment_details_account_nr';
const SUIBMIT_FORM_BTN = '[type=submit]';

//APPLICATION AND NO PORTING
const SELECT_FAMILY_TYPE = '[data-testid=loan-details--family-type-selector]';
const FILL_HOSEING_COST = '[data-testid=loan-details--housing-costs]';
const FILL_NET_INCOME = '#loan_details_income';
const SUBMIT_APPLICATION_BTN = '[data-testid=loan-details--submit-button]'
const VERIFY_NUMBER_PORTING_PAGE_TITLE = '#number_porting_wrapper';
const NUMBER_NEXT_BTN = '[data-testid=number-porting--next-step-btn]'
//METHODS TO GET LOCATORS
const acceptCookiesAtDashBoard = () => cy.get(ACCEPT_COOKIES_AT_DASHBOARD);
const productPhone = () => cy.get(PRODUCT_PHONE);
const iphoneImage = () => cy.get(CLICK_ON_IPHONE_IMAGE);
const selectIphone64Gb = () => cy.get(SELECT_IPHONE_64_GB);
const modalNewSubscription = () => cy.get(MODAL_NEW_SUBSCRIPTION);
const popoupNewSubscription = () => cy.get(POPUP_NEW_SUBSCRIPTION)
const modalSelectColourOfIphone = () => cy.get(MODAL_SELECT_COLOUR_OF_IPHONE)
const popoupSelectColourOfIphone = () => cy.get(POPUP_SELECT_COLOUR_OF_IPHONE)
const modalOrderButton = () => cy.get(MODAL_ORDER_BUTTON)
const popupOrderButton = () => cy.get(POPUP_ORDER_BUTTON)
const modalIwantNewSubscription = () => cy.get(MODAL_I_WANT_NEW_SUBSCRIPTION)
const popupIwantNewSubscription = () => cy.get(POPUP_I_WANT_NEW_SUBSCRIPTION)
const titleAppleIphone64GbYellow = () => cy.get(TITLE_APPLE_IPHONE_11_64_GB_YELLOW)
const cartContractingPartyNextBtn = () => cy.get(CART_CONTRACTING_PARTY_NEXT_BTN)
//FILL DATA FORM METHODS
const fillEmailId = () => cy.get(FILL_EMAIL_ID)
const selectGenderRadioBtn = () => cy.get(SELECT_GENDER_MALE_RADIO_BTN)
const fillInitialName = () => cy.get(FILL_INITIAL_NAME)
const fillLastName = () => cy.get(FILL_LAST_NAME)
const fillDateOfBirth = () => cy.get(FILL_DATE_OF_BIRTH)
const fillContractingPartyCellPhoneNo = () => cy.get(FILL_CONTRACTING_PARTY_CELL_PHONE_NO)
const selectInvoiceAddressCountry = () => cy.get(SELECT_INVOIVE_ADDESS_COUNTRY)
const fillPostalCode = () => cy.get(FILL_POSTAL_CODE)
const fillHouseNumber = () => cy.get(FILL_HOUSE_NUMBER)
const fillIdentificationNo = () => cy.get(FILL_IDENTIFICATION_NUMBER)
const verifyStreatName = () => cy.get(VERIFY_STREAT_NAME)
const verifyAddressSameAsBilling = () => cy.get(VERIFY_ADDRESS_SAME_AS_BILLING)
const selectNationality = () => cy.get(SELECT_NATIONALITY)
const selectIdentityType = () => cy.get(SELECT_IDENTITY_TYPE)
const fillIdExpiryDate = () => cy.get(FILL_ID_EXPIRY_DATE)
const fillBankAccount = () => cy.get(FILL_BANK_ACCOUNT_NUMBER)
const submitFormBtn = () => cy.get(SUIBMIT_FORM_BTN)
const verifynumberportingPagetitle = () => cy.get(VERIFY_NUMBER_PORTING_PAGE_TITLE)
const selectFamilyType = () => cy.get(SELECT_FAMILY_TYPE)
const fillHousingCost = () => cy.get(FILL_HOSEING_COST)
const fillNetincome = () => cy.get(FILL_NET_INCOME)
const submitApplicationBtn = () => cy.get(SUBMIT_APPLICATION_BTN)
const numbernextBtn = () => cy.get(NUMBER_NEXT_BTN)


//EXPORT METHODS 
module.exports = {
    acceptCookiesAtDashBoard, productPhone, iphoneImage, selectIphone64Gb, modalNewSubscription, popoupNewSubscription, modalSelectColourOfIphone, popoupSelectColourOfIphone,
    modalOrderButton, popupOrderButton, modalIwantNewSubscription, popupIwantNewSubscription, titleAppleIphone64GbYellow, cartContractingPartyNextBtn,
    fillEmailId, selectGenderRadioBtn, fillInitialName, fillLastName, fillDateOfBirth, fillContractingPartyCellPhoneNo,
    selectInvoiceAddressCountry, fillPostalCode, fillHouseNumber, fillIdentificationNo, verifyStreatName, verifyAddressSameAsBilling,
    selectNationality, selectIdentityType, fillIdExpiryDate, fillBankAccount, submitFormBtn, verifynumberportingPagetitle, selectFamilyType, fillHousingCost,
    fillNetincome, submitApplicationBtn, numbernextBtn
}