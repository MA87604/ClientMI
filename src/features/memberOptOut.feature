Feature: View Member Opt Out Overview

@optOut
Scenario Outline: User able to View Member Opt Out Overview

    Given user logged into the "<space>" dashboard
    And user select the scheme "<schemeId>"
    When user navigates to Member Opt Out Overview
    Then user able to view the Member Opt Out fields in the page
    And user able to view "<scheme>" Member Opt Out filter "<options>", "<gender>" and "<age>"

        Examples:
        |space |schemeId |options|gender|age|
        |My Scheme Intelligence - Production Staging|GF61865001 - YOUR SODEXO RETIREMENT PLAN|Home Retail Group AE Population|Male|All|