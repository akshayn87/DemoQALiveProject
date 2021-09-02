$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functinality scenarios",
  "description": "",
  "id": "login-functinality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13277400800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify whether the User is able to login with valid credentials",
  "description": "",
  "id": "login-functinality-scenarios;verify-whether-the-user-is-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    },
    {
      "line": 3,
      "name": "@One"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I naviage to Account Login page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I login to the application using Username \"ravi.kiran1@gmail.com\" and Password \"rkiran\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see that the User is able to successfully login",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 5134971500,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_naviage_to_Account_Login_page()"
});
formatter.result({
  "duration": 1532973100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ravi.kiran1@gmail.com",
      "offset": 43
    },
    {
      "val": "rkiran",
      "offset": 80
    }
  ],
  "location": "Login.i_login_to_the_application_using_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 1392987300,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_that_the_User_is_able_to_successfully_login()"
});
formatter.result({
  "duration": 250801300,
  "status": "passed"
});
formatter.after({
  "duration": 1325046100,
  "status": "passed"
});
formatter.before({
  "duration": 3760871800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify that the User is not able to login with invalid credentials",
  "description": "",
  "id": "login-functinality-scenarios;verify-that-the-user-is-not-able-to-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Login"
    },
    {
      "line": 10,
      "name": "@Two"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I naviage to Account Login page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I login to the application using Username \"ravi.kiran99@gmail.com\" and Password \"rkiran99\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see an error message informing the User about invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 9921370400,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_naviage_to_Account_Login_page()"
});
formatter.result({
  "duration": 1459677900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ravi.kiran99@gmail.com",
      "offset": 43
    },
    {
      "val": "rkiran99",
      "offset": 81
    }
  ],
  "location": "Login.i_login_to_the_application_using_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 1120443100,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_an_error_message_informing_the_User_about_invalid_credentials()"
});
formatter.result({
  "duration": 348345600,
  "status": "passed"
});
formatter.after({
  "duration": 929361100,
  "status": "passed"
});
formatter.before({
  "duration": 2168167300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify that the User is not able to login without providing credentials",
  "description": "",
  "id": "login-functinality-scenarios;verify-that-the-user-is-not-able-to-login-without-providing-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Login"
    },
    {
      "line": 17,
      "name": "@Three"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I naviage to Account Login page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I login to the application using Username \"\" and Password \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should see an error message informing the User about invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 3916172800,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_naviage_to_Account_Login_page()"
});
formatter.result({
  "duration": 1345478700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 43
    },
    {
      "val": "",
      "offset": 59
    }
  ],
  "location": "Login.i_login_to_the_application_using_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 942877100,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_an_error_message_informing_the_User_about_invalid_credentials()"
});
formatter.result({
  "duration": 140368400,
  "status": "passed"
});
formatter.after({
  "duration": 968979200,
  "status": "passed"
});
formatter.before({
  "duration": 2272115100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify that the User is able to reset forgotten password",
  "description": "",
  "id": "login-functinality-scenarios;verify-that-the-user-is-able-to-reset-forgotten-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@Login"
    },
    {
      "line": 24,
      "name": "@Four"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I naviage to Account Login page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I reset the forgotten password for \"ravi.kiran@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should see a message informing that the password reset details have been sent to the email address",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 4017346000,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_naviage_to_Account_Login_page()"
});
formatter.result({
  "duration": 1294260100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ravi.kiran@gmail.com",
      "offset": 36
    }
  ],
  "location": "Login.i_reset_the_forgotten_password_for(String)"
});
formatter.result({
  "duration": 1741915600,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_a_message_informing_that_the_password_reset_details_have_been_sent_to_the_email_address()"
});
formatter.result({
  "duration": 148007900,
  "status": "passed"
});
formatter.after({
  "duration": 1058320800,
  "status": "passed"
});
formatter.uri("FeatureFiles/Register.feature");
formatter.feature({
  "line": 1,
  "name": "Registration functionality scenarios",
  "description": "",
  "id": "registration-functionality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2251405600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify whether the user is able to register into the application by providing all the fields",
  "description": "",
  "id": "registration-functionality-scenarios;verify-whether-the-user-is-able-to-register-into-the-application-by-providing-all-the-fields",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@One"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to Account Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I provide all the below valid details",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Ravi"
      ],
      "line": 8
    },
    {
      "cells": [
        "LastName",
        "Kiran"
      ],
      "line": 9
    },
    {
      "cells": [
        "Email",
        "Ravi.kiran2@gmail.com"
      ],
      "line": 10
    },
    {
      "cells": [
        "Telephone",
        "9212345678"
      ],
      "line": 11
    },
    {
      "cells": [
        "Password",
        "rkiran"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select the Privacy Policy",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see that the User Account has successfully created",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 3478879500,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 1750964300,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_all_the_below_valid_details(DataTable)"
});
formatter.result({
  "duration": 1315313500,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 243394200,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continue_button()"
});
formatter.result({
  "duration": 818935300,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_Account_has_successfully_created()"
});
formatter.result({
  "duration": 189823900,
  "status": "passed"
});
formatter.after({
  "duration": 1250080000,
  "status": "passed"
});
formatter.before({
  "duration": 2085935900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify whether the user is not allowed to register on skipping mandatory fields",
  "description": "",
  "id": "registration-functionality-scenarios;verify-whether-the-user-is-not-allowed-to-register-on-skipping-mandatory-fields",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Register"
    },
    {
      "line": 17,
      "name": "@Two"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I navigate to Account Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Continue button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should see that the User Account is not created",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I should see the error messages informing the user to fill the mandatory fields",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 3905069400,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 1610324300,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continue_button()"
});
formatter.result({
  "duration": 688830100,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_Account_is_not_created()"
});
formatter.result({
  "duration": 156777400,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_the_error_messages_informing_the_user_to_fill_the_mandatory_fields()"
});
formatter.result({
  "duration": 384210600,
  "status": "passed"
});
formatter.after({
  "duration": 1078062300,
  "status": "passed"
});
formatter.before({
  "duration": 1969215900,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify whether the user is able to register into the application by opting for Newsletter subscription",
  "description": "",
  "id": "registration-functionality-scenarios;verify-whether-the-user-is-able-to-register-into-the-application-by-opting-for-newsletter-subscription",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@Register"
    },
    {
      "line": 25,
      "name": "@Three"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I navigate to Account Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I provide all the below valid details",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Ravi"
      ],
      "line": 30
    },
    {
      "cells": [
        "LastName",
        "Kiran"
      ],
      "line": 31
    },
    {
      "cells": [
        "Email",
        "Ravi.kiran2@gmail.com"
      ],
      "line": 32
    },
    {
      "cells": [
        "Telephone",
        "9212345678"
      ],
      "line": 33
    },
    {
      "cells": [
        "Password",
        "rkiran"
      ],
      "line": 34
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I subscribe to Newsletter",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select the Privacy Policy",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see that the User Account has successfully created",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 3587114200,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 1602131400,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_all_the_below_valid_details(DataTable)"
});
formatter.result({
  "duration": 1526187200,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_subscribe_to_Newsletter()"
});
formatter.result({
  "duration": 206196800,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 286623300,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continue_button()"
});
formatter.result({
  "duration": 746472400,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_Account_has_successfully_created()"
});
formatter.result({
  "duration": 152327100,
  "status": "passed"
});
formatter.after({
  "duration": 954975000,
  "status": "passed"
});
formatter.before({
  "duration": 1943039600,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Verify whether the user is restricted from creating a duplicate account",
  "description": "",
  "id": "registration-functionality-scenarios;verify-whether-the-user-is-restricted-from-creating-a-duplicate-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@Register"
    },
    {
      "line": 40,
      "name": "@Four"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I navigate to Account Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I provide the below duplicate details into the fields",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Ravi"
      ],
      "line": 45
    },
    {
      "cells": [
        "LastName",
        "Kiran"
      ],
      "line": 46
    },
    {
      "cells": [
        "Email",
        "Ravi.kiran1@gmail.com"
      ],
      "line": 47
    },
    {
      "cells": [
        "Telephone",
        "9212345678"
      ],
      "line": 48
    },
    {
      "cells": [
        "Password",
        "rkiran"
      ],
      "line": 49
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "I select the Privacy Policy",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I should see the warning message stating that the user is already created",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 4351431900,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 1771629400,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_the_below_duplicate_details_into_the_fields(DataTable)"
});
formatter.result({
  "duration": 1329171500,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 226050600,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continue_button()"
});
formatter.result({
  "duration": 691773400,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_the_warning_message_stating_that_the_user_is_already_created()"
});
formatter.result({
  "duration": 103472400,
  "status": "passed"
});
formatter.after({
  "duration": 994597000,
  "status": "passed"
});
formatter.uri("FeatureFiles/Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search functinality scenarios",
  "description": "",
  "id": "search-functinality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1960819900,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Verify whether the User is able to search for products",
  "description": "",
  "id": "search-functinality-scenarios;verify-whether-the-user-is-able-to-search-for-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Search"
    },
    {
      "line": 2,
      "name": "@One"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I search for a product \"Samsung SyncMaster 941BW\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see the product in the search resultsil address",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 5747643100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung SyncMaster 941BW",
      "offset": 24
    }
  ],
  "location": "Search.i_search_for_a_product(String)"
});
formatter.result({
  "duration": 1621103500,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_should_see_the_product_in_the_search_resultsil_address()"
});
formatter.result({
  "duration": 160921700,
  "status": "passed"
});
formatter.after({
  "duration": 1059879100,
  "status": "passed"
});
formatter.before({
  "duration": 2293350600,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify whether the User is informed when the product being searched is not available",
  "description": "",
  "id": "search-functinality-scenarios;verify-whether-the-user-is-informed-when-the-product-being-searched-is-not-available",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Search"
    },
    {
      "line": 8,
      "name": "@Two"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I search for a product \"Apple iPhone\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should see the page displaying the message \"There is no product that matches the search criteria.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 3937070200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPhone",
      "offset": 24
    }
  ],
  "location": "Search.i_search_for_a_product(String)"
});
formatter.result({
  "duration": 1429894700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "There is no product that matches the search criteria.",
      "offset": 46
    }
  ],
  "location": "Search.i_should_see_the_page_displaying_the_message(String)"
});
formatter.result({
  "duration": 119348200,
  "status": "passed"
});
formatter.after({
  "duration": 1074912800,
  "status": "passed"
});
});