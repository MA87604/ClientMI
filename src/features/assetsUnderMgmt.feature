Feature: View Overview of assets under management

@assetUnderMgmt
Scenario Outline: User able to view Overview of assets under management

    Given user logged into the "<space>" dashboard
    And user select the scheme "<schemeId>"
    When user navigates to Overview of assets under management
    Then user able to view the basic fields in the page for the "<schemeId>"
    #And user able to view filter "<options>"

        Examples:
        |space |schemeId |options|
        |My Scheme Intelligence Dashboard|GF15927001 - MITCHELLS & BUTLERS PENSION PLAN|DB/DC Deferred Members Main Plan| 
