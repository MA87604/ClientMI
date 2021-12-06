Feature: View the different sections in workplace dashboard

    @landing

    Scenario Outline: User should be able to view different sections in the dashboard

        Given user logged into the "<space>" dashboard
        #Then user able to view "<fields>" in dashboard page
        Then user able to view fields in dashboard page

        Examples:
            |space |fields|
            |My Scheme Intelligence Dashboard|Term & Conditons|

            

















            
        
            #| space                            | fields                     
            #| My Scheme Intelligence Dashboard | Term & Conditons           |
            #|                                  | Term & Conditions Text     |
            #|                                  | FAQ Text                   |
            #|                                  | FAQ                        |
            #|                                  | Analytics Text             |
            #|                                  | Navigation Training video  |
            #|                                  | Advanced Data Filter video |
            #|                                  | Campaign Hub Text          |
            #|                                  | Campaign Hub               |
            #|                                  | Select a scheme            |
            #|                                  | export                     |
            #|                                  | SchemeCombobox             |
            #|                                  | bookmark                   |
            #|                                  | filter                     |
            #|                                  | helpTips                   |
            #|                                  | refresh                    |
           # |                                  | browseCollection           |
            #|                                  | header                     |


