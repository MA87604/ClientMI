Feature: View Overview of assets under management

@assetUnderMgmt  @Regression
Scenario Outline: User able to view Overview of assets under management

    Given user logged into the "<space>" dashboard
    And user select the scheme "<schemeId>"
    When user navigates to Assets under management Overview page
    Then user able to view the assets under management fields in the page for the "<schemeId>"
    And user able to view graph and table for the "<schemeId>"
    And user able to view filter options for the "<schemeId>"

        Examples:
        |space |schemeId |options|
#        |My Scheme Intelligence Dashboard|GF71965001 - SAINSBURY'S RETIREMENT SAVINGS PLAN|DB/DC Deferred Members Main Plan|
        |My Scheme Intelligence Dashboard|GF61865001 - YOUR SODEXO RETIREMENT PLAN|DB/DC Deferred Members Main Plan|
