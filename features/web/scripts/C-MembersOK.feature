Feature: Members
@user1 @web
Scenario: Como usuario deseo actualizar a  un member
Given  I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 5 seconds
And I enter email sign in
And I wait for 2 seconds
And I enter password
And I click next
And I wait for 2 seconds
And I click member
And I wait for 5 seconds
And I click new member
And I wait for 5 seconds
And I enter name member
And I enter email member
And I wait for 1 seconds
And I enter note member
And I save new member
And I wait for 3 seconds
And I click member
And I wait for 3 seconds
And I search by email member
And I wait for 3 seconds
Then I selected first member 
And I wait for 5 seconds
And I enter name member
And I wait for 1 seconds
And I enter note member
And I save member
And I wait for 3 seconds
And I click member
And I wait for 5 seconds
And I search by name member
And I wait for 2 seconds
Then I selected first member 
#Exit Ghost-Begin
And I wait for 3 seconds
And I click perfil
And I wait for 2 seconds
And I close my session
And I wait for 3 seconds
#Exit Ghost-End


@user2 @web
Scenario: Como usuario deseo crear un member y comprobar que si lo guardo
Given  I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 5 seconds
And I enter email sign in
And I wait for 2 seconds
And I enter password
And I click next
And I wait for 2 seconds
And I wait for 2 seconds
And I click member
And I wait for 5 seconds
And I click new member
And I wait for 5 seconds
And I enter name member
And I enter email member
And I wait for 1 seconds
And I enter note member
And I save new member
And I wait for 3 seconds
And I click member
And I wait for 3 seconds
And I search by email member
And I wait for 3 seconds
Then I selected first member 

#Exit Ghost-Begin
And I wait for 3 seconds
And I click perfil
And I wait for 2 seconds
And I close my session
And I wait for 3 seconds
#Exit Ghost-End

@user3 @web
Scenario: Como usuario deseo borrar un member
Given  I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 5 seconds
And I enter email sign in
And I wait for 2 seconds
And I enter password
And I click next
And I wait for 2 seconds
And I wait for 2 seconds
And I click member
And I wait for 5 seconds
And I click new member
And I wait for 5 seconds
And I enter name member
And I enter email member
And I wait for 1 seconds
And I enter note member
And I save new member
And I wait for 3 seconds
And I click member
And I wait for 3 seconds
And I search by email member
And I wait for 3 seconds
And I selected first member 
And I wait for 2 seconds
And I select setting
And I wait for 2 seconds
And I select button delete
And I wait for 2 seconds
And I Click btn ConfirmDelete
And I wait for 2 seconds
And I Click btn LeaveDelete

#Exit Ghost-Begin
And I wait for 3 seconds
And I click perfil
And I wait for 2 seconds
And I close my session
And I wait for 3 seconds
#Exit Ghost-End

