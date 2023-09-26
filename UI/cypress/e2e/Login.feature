Feature: Login
    Scenario Outline: Successful login
        Given I visit EBAC Store login page
        When I log in with user "<user>" and pass "<pass>"
        Then the dashboard page should be visible

        Examples:
        | user                      | pass                     | userDisplay      |
        | teste_giovanna3@teste.com | teste123                | teste_giovanna   |

    Scenario Outline: Login with the wrong password
        Given I visit EBAC Store login page
        When I log in with user "<user>" and pass "<pass>"
        Then a password error for the "<user>" message must appear

        Examples:
        | user                     | pass                     |
        | teste_giovanna@teste.com | senhaerrada              |
        
    Scenario Outline: Login with the invalid user
        Given I visit EBAC Store login page
        When I log in with user "<user>" and pass "<pass>"
        Then An unknown user error message must appear

        Examples:
        | user                     | pass                 |
        | usuarioinativo@teste.com | 123                  |
    
    Scenario Outline: Block user
        Given I visit EBAC Store login page
        When I log in with user "<user>" and pass "<pass>" three times
        Then login should be blocked for 15 min

        Examples:
        | user                     | pass               |
        | usuarioinativo@teste.com | abcdefg            |