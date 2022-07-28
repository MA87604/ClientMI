Feature: View Member Opt Out Overview

@optOut
Scenario Outline: User able to View Member Opt Out Overview
    Given user logged into the "<space>" dashboard
    And user select the scheme "<schemeId>"
    When user navigates to Member Opt Out Overview page
    Then user able to view the Member Opt Out fields for "<schemeId>"
    And user able to view "<schemeId>" Member Opt Out filters

        Examples:
        |space |schemeId |options|gender|age|
#       |My Scheme Intelligence Dashboard|GF61865001 - YOUR SODEXO RETIREMENT PLAN|Home Retail Group AE Population|Male|All|
        |My Scheme Intelligence Dashboard|GF71965001 - SAINSBURY'S RETIREMENT SAVINGS PLAN|Home Retail Group AE Population|Male|All|