Feature: Login
    Scenario Outline: Successful login
        Given I visit EBAC Store
        When I log in with user "<user>" and pass "<pass>"
        Then the admin dashboard page should be visible

        Examples:
        | user                   | pass                     |
        | usuarioativo@teste.com | teste@123                |

    Scenario Outline: Login with the wrong password
        Given I visit EBAC Store
        When I log in with user "<user>" and pass "<pass>"
        Then a password error message must appear

        Examples:
            | user                   | pass                     |
            | usuarioativo@teste.com | senhaerrada              |
        
    Scenario Outline: Login with the invalid user
        Given I visit EBAC Store
        When I log in with user "<user>" and pass "<pass>"
        Then An unknown user error message must appear

        Examples:
            | user                     | pass                 |
            | usuarioinativo@teste.com | 123                  |
    
    Scenario Outline: Block user
        Given I visit EBAC Store
        When I log in with user "<user>" and pass "<pass>" three times
        Then login should be blocked

        Examples:
            | user    | pass                     |
            | gerente | GD*peToHNJ1#c$sgk08EaYJQ |