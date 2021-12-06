Feature: service level agreement overview

@serviceLevelAgreement

Scenario Outline: User able to view service level agreement overview

    Given user logged into the "<space>" dashboard
    And user select the scheme "<schemeId>"
    When user navigates to service level agreement overview
    Then user able to view the service level agreement fields in the page
    And user able to view "<schemeId>" service level agreement filter "<options>"

        Examples:
        |space |schemeId |options|
        |My Scheme Intelligence Dashboard|GF10606001 - THE TESCO RETIREMENT SAVINGS PLAN|DB/DC Deferred Members Main Plan|

