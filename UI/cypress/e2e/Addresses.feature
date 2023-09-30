Feature: Address Page

    Scenario: Go to Billing Address Edition
        Given I login into my EBAC store account
        When I visit my addresses page
        And I click to edit my billing address
        Then A new billing address edit page should open

    Scenario: Go to Shipping Address Edition
        Given I login into my EBAC store account
        When I visit my addresses page
        And I click to edit my shipping address
        Then A new shipping address edit page should open

    Scenario: Edit Billing Address
        Given I login into my EBAC store account
        When I visit my addresses page
        And I click to edit my billing address
        And I edit my billing address fields
        Then I should be able to save the new address

    Scenario Outline: Leave mandatory fields empty Billing Address
        Given I login into my EBAC store account
        When I visit my addresses page
        And I click to edit my billing address
        And I leave "<field>" field empty
        Then A mandatory "<fieldName>" error message should appear

         Examples:
        | field         | fieldName  |
        | FirstName     | Nome       |
        | LastName      | Sobrenome  |
        | Endereço1     | Endereço   |
        | Cidade        | Cidade     |
        | PostCode      | CEP        |

    Scenario: Edit Shipping Address
        Given I login into my EBAC store account
        When I visit my addresses page
        And I click to edit my shipping address
        And I edit my shipping address fields
        Then I should be able to save the new address

    Scenario: Delete Shipping Address
        Given I login into my EBAC store account
        When I visit my addresses page
        And I click to edit my shipping address
        And I delete my shipping address fields
        Then Mandatory fields error message should appear
        
