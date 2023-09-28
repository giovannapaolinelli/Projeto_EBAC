Feature: My Order Page

    Scenario: Visualize orders
        Given I am logged with a user who has completed an order
        When I access my order page
        Then My order must be visible
    
    Scenario: Visualize order details from order number
        Given I am logged with a user who has completed an order
        When I access my order page
        And click on the order number
        Then I should see my order details   

    Scenario: Visualize order details from button
        Given I am logged with a user who has completed an order
        When I access my order page
        And click on the visualize
        Then I should see my order details   

    Scenario: User without orders
        Given I am logged with a user who has not completed an order
        When I access my order page
        Then An empty order message should appear
    
    Scenario: Access product page from My Order page
        Given  I am logged with a user who has not completed an order
        When I access my order page
        And I click on the link to see products
        Then Product page should appear
    
    Scenario Outline: Change status
        Given I am logged with a user who has completed an order
        When My order status changes to "<status>"
        And I access my order page
        Then My order status must be "<status>"

        Examples:
        | status        |
        | pending       |
        | processing    |
        | on-hold       |
        | completed     |
        | cancelled     |
        | refunded      |
        | failed        |

    Scenario Outline: Pay order
        Given I am logged with a user who has completed an order
        When My order status changes to "<status>"
        And I access my order page
        And I pay the order
        Then My order status must be processing

        Examples:
        | status        |
        | pending       |
        | failed        |

    Scenario Outline: Cancel order
        Given I am logged with a user who has completed an order
        When My order status changes to "<status>"
        And I access my order page
        And I cancel my order
        Then My order status must be cancelled

        Examples:
        | status        |
        | pending       |
        | failed        |
 
