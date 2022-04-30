Feature: User search as T-Shirts and apply sort option

  Scenario Outline: As a user, I search a T-Shirts in Home Page and apply Sort Option

    Given I launch the application
      And I wait for home page to load
    When I search as "T-shirts" in search bar
    Then I validate search results page loaded
    When I apply sort by option as "Price: Low to High"
    Then I validate all products are sorted by "Price: Low to High"

