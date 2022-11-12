Feature: ChangePasssword
@user22 @web
Scenario: Como usuario deseo modificar mi contraseña de perfil
Given  I navigate to page "http://localhost:2368/ghost/#/signin"
#And I wait for 30 seconds
And I wait for 5 seconds
And I enter email sign in
And I wait for 2 seconds
And I enter password
And I click next
And I wait for 5 seconds
#Enter Module
And I click perfil
And I wait for 3 seconds
And I click your profile
And I wait for 3 seconds

#Change password
And I enter old password
And I enter new password
And I enter verify password
And I click change password
#Save
And I wait for 1 seconds
And I click save your profile
And I wait for 10 seconds
#Exit Ghost-Begin
And I wait for 3 seconds
And I click perfil
And I wait for 2 seconds
And I close my session
And I wait for 3 seconds
#Exit Ghost-End

#Relogin
And I enter email sign in
And I wait for 2 seconds
And I enter new password sign in
And I click next
And I wait for 5 seconds
#Enter Module
And I click perfil
And I wait for 3 seconds
And I click your profile
And I wait for 3 seconds
And I enter old password-return
And I enter new password-return
And I enter verify password-return
And I click change password
And I wait for 5 seconds
#Exit Ghost-Begin
And I wait for 3 seconds
And I click perfil
And I wait for 2 seconds
And I close my session
And I wait for 3 seconds
#Exit Ghost-End