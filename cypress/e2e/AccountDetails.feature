Feature: Account Details
    Scenario Outline: Edit info
        Given I login into my EBAC store account
        When I visit my account details page
        And I edit my info "<info>" with "<input>"
        Then My details must be saved
        
        Examples:
        | info          | input           |
        | name          | name            |
        | lastName      | sobrenome       |
        | displayName   | nome            |

    Scenario Outline: Save without mandatory fields
        Given I login into my EBAC store account
        When I visit my account details page
        And I save without an info "<info>"
        Then A mandatory "<field>" error message must appear

        Examples:
        | info          | field             |
        | name          | Nome              |
        | lastName      | Sobrenome         |
        | displayName   | Nome de exibição  |
        | email         | Endereço de e-mail |

    Scenario Outline: change password without current password
        Given I login into my EBAC store account
        When I visit my account details page
        And I change my password for "<pass>"
        Then a missing password error message must appear

        Examples:
        | pass                 |
        | AnoNovo#123456789!   |
    
    Scenario Outline: change password with different passwords
        Given I login into my EBAC store account
        When I visit my account details page
        And I change my password for "<pass>"
        And I confirm my password for "<conf>"
        Then a different password error message must appear

        Examples:
        | pass                    | conf          |
        | AnoNovo#123456789!      | passWord#202  |
