Feature: Test TestMeApp
Test the TestMeApp application
Scenario: Validate register functionality
Given open the application
When enter the user name as "oviya11122"
And Enter first name as "oviya"
And Enter last name as "sam"
And Enter the password details as "Navyaa"
And Enter confrim password as "Navyaa"
And Select the gender
And Enter the emailid as "navya@gmail.com"
And Enter the mobile number as "9876543786"
And Enter dob as "30/05/1998"
And Enter the address as "asdfghjklz"
Then Select the security questions
And Enter the answer for the qns as "Blue"
Then click register