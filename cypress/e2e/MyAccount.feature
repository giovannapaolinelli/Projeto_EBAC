Feature: My Account

    Scenario: Logout
        Given I login into my EBAC store account
        When I logout
        Then I should be logged off
    
    Scenario: Logoff from dashboard message
        Given I login into my EBAC store account
        When I click on logout from the dashboard message
        Then I should be logged off

    Scenario: Go to orders
        Given I login into my EBAC store account
        When I go to orders
        Then I should see my orders
    
    Scenario: Go to addresses
        Given I login into my EBAC store account
        When I go to addresses
        Then I should see my addresses

    Scenario: Go to downloads
        Given I login into my EBAC store account
        When I go to downloads
        Then I should see my downloads

    Scenario: Go to account details
        Given I login into my EBAC store account
        When I go to account details
        Then I should see my account details