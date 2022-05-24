Feature: View Overview of assets under management

@assetUnderMgmt  @Regression
Scenario Outline: User able to view Overview of assets under management

    Given user logged into the "<space>" dashboard
    #Replace "schemID" with whatever schemeID you want to use for the test
    And user select the scheme "<schemeId>" 
    When user navigates to Overview of assets under management
    Then user able to view the basic fields in the page for the "<schemeId>"
    #And user able to view filter "<options>"

        Examples:
        |space |schemeId |options|
        #|My Scheme Intelligence Dashboard|GF15927001 - MITCHELLS & BUTLERS PENSION PLAN|DB/DC Deferred Members Main Plan| 
        #|My Scheme Intelligence - Production Staging|GF83965001 - SAINSBURY'S PENSION SCHEME AVC|DB/DC Deferred Members Main Plan|
        |My Scheme Intelligence Dashboard|GF71965001 - SAINSBURY'S RETIREMENT SAVINGS PLAN|DB/DC Deferred Members Main Plan|
        #|My Scheme Intelligence - Production Staging|GF75755001 - SAINSBURY'S SIPP|DB/DC Deferred Members Main Plan|
#        |My Scheme Intelligence Dashboard|GF61865001 - YOUR SODEXO RETIREMENT PLAN|DB/DC Deferred Members Main Plan|
