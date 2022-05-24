Feature: View Member Information Overview

#@login
@memberInfo  @Regression
Scenario Outline: User able to view Member Information Overview

    Given user logged into the "<space>" dashboard
    And user select the scheme "<schemeId>"
    When user navigates to Member Information Overview
    Then user able to view the Member Information fields in the page
    And user able to view "<schemeId>" Member Information Overview filter "<options>", "<gender>", "<ageband>" and "<age>"

        Examples:
        |space |schemeId |options|gender|ageband|age|
        #|My Scheme Intelligence Dashboard|GF34865001 - PACE DC - CO-OP SECTION AVCS|DB/DC Deferred Members Main Plan|Female|31|40|
        #|My Scheme Intelligence - Production Staging|GF83965001 - SAINSBURY'S PENSION SCHEME AVC|DB/DC Deferred Members Main Plan|Female|31|40|
#        |My Scheme Intelligence Dashboard|GF71965001 - SAINSBURY'S RETIREMENT SAVINGS PLAN|DB/DC Deferred Members Main Plan|Female|31|40|
        #|My Scheme Intelligence - Production Staging|GF75755001 - SAINSBURY'S SIPP|DB/DC Deferred Members Main Plan|Female|31|40|
        |My Scheme Intelligence Dashboard|GF61865001 - YOUR SODEXO RETIREMENT PLAN|DB/DC Deferred Members Main Plan|Female|31|40|
     