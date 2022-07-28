Feature: View Member Information Overview

#@login
@memberInfo  @Regression
Scenario Outline: User able to view Member Information Overview

    Given user logged into the "<space>" dashboard
    And user select the scheme "<schemeId>"
    When user navigates to Member Information Overview
    Then user able to view the Member Information fields in the page
    And user able to view "<schemeId>" Member Information Overview filter "<options>", "<gender>", "<ageband>" and "<age>"
    And user able to view Member Info filter options for the "<schemeId>" in Overview page
    And user able to view Member Info maps or charts for the "<schemeId>" in Overview page
    And user able to view Member Info filter options for the "<schemeId>" in Member Info Detail Report
    And user able to view "<schemeId>" Member Information Detail Report

        Examples:
        |space |schemeId |options|gender|ageband|age|
#        |My Scheme Intelligence Dashboard|GF71965001 - SAINSBURY'S RETIREMENT SAVINGS PLAN|DB/DC Deferred Members Main Plan|Female|31-35|40|
        |My Scheme Intelligence Dashboard|GF61865001 - YOUR SODEXO RETIREMENT PLAN|DB/DC Deferred Members Main Plan|Female|31-35|40|
     