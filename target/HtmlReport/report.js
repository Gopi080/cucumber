$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:sam/TestMeApp.feature");
formatter.feature({
  "name": "Test TestMeApp",
  "description": "Test the TestMeApp application",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate register functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "open the application",
  "keyword": "Given "
});
formatter.match({
  "location": "samplestepdefn.open_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the user name as \"oviya11122\"",
  "keyword": "When "
});
formatter.match({
  "location": "samplestepdefn.enter_the_user_name_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter first name as \"oviya\"",
  "keyword": "And "
});
formatter.match({
  "location": "samplestepdefn.enter_first_name_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter last name as \"sam\"",
  "keyword": "And "
});
formatter.match({
  "location": "samplestepdefn.enter_last_name_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the password details as \"Navyaa\"",
  "keyword": "And "
});
formatter.match({
  "location": "samplestepdefn.enter_the_password_details_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter confrim password as \"Navyaa\"",
  "keyword": "And "
});
formatter.match({
  "location": "samplestepdefn.enter_confrim_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the gender",
  "keyword": "And "
});
formatter.match({
  "location": "samplestepdefn.select_the_gender()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the emailid as \"navya@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "samplestepdefn.enter_the_emailid_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the mobile number as \"9876543786\"",
  "keyword": "And "
});
formatter.match({
  "location": "samplestepdefn.enter_the_mobile_number_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter dob as \"30/05/1998\"",
  "keyword": "And "
});
formatter.match({
  "location": "samplestepdefn.enter_dob_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the address as \"asdfghjklz\"",
  "keyword": "And "
});
formatter.match({
  "location": "samplestepdefn.enter_the_address_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the security questions",
  "keyword": "Then "
});
formatter.match({
  "location": "samplestepdefn.select_the_security_questions()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the answer for the qns as \"Blue\"",
  "keyword": "And "
});
formatter.match({
  "location": "samplestepdefn.enter_the_answer_for_the_qns_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click register",
  "keyword": "Then "
});
formatter.match({
  "location": "samplestepdefn.click_register()"
});
formatter.result({
  "status": "passed"
});
});