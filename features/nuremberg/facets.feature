Feature: Facets

	In order to refine my search results
	As a user
	I want to use facets for different search parameters.

	Background: 

	@homepage 
        @javascript
	Scenario: Viewing the home page
		Given I am on the home page
		Then I should see a facet called 'Author'
		And I should see a facet called 'Date'
		And I should see a facet called 'Keyword'
		And I should see a facet called 'Language'
		And I should see a facet called 'Witness'
		And I should see a facet called 'Volume'
