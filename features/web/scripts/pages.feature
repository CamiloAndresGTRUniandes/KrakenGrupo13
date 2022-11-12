Feature: Pages
############################################################################
########## Escenario 5: Como usuario deseo crear una nueva pagina ##########
############################################################################
@user205 @web
Scenario: Como usuario deseo crear una nueva pagina
Given  I navigate to page "http://localhost:2368/ghost/#/signin"

#Start Ghost-Login
And I wait for 3 seconds
And I enter email sign in
And I wait for 2 seconds
And I enter password
And I click next
And I wait for 2 seconds
#Start Ghost-Login

And I click "pages link"
And I wait for 2 seconds
And I click "New Page button inside pages module"
And I wait for 2 seconds
And I enter text in "page title field inside pages editor"
And I wait for 2 seconds
And I enter text in "page body field inside pages editor"
And I wait for 4 seconds
And I click "Publish button inside pages editor"
And I wait for 3 seconds
And I click "Continue button after pages editor"
And I wait for 3 seconds
And I click "Publish page button after pages editor"
And I wait for 3 seconds
And I click "Back to Editor button inside pages publish"
And I wait for 2 seconds
And I click "Back to pages button inside pages editor"

##Exit Ghost-Begin
And I wait for 3 seconds
And I click perfil
And I wait for 2 seconds
And I close my session
And I wait for 3 seconds
##Exit Ghost-End



#############################################################################################
########## Escenario 6: Como usuario deseo agendar la creación de una nueva pagina ##########
#############################################################################################
@user206 @web
Scenario: Como usuario deseo agendar la creación de una nueva pagina
Given  I navigate to page "http://localhost:2368/ghost/#/signin"

#Start Ghost-Login
And I wait for 3 seconds
And I enter email sign in
And I wait for 2 seconds
And I enter password
And I click next
And I wait for 2 seconds
#Start Ghost-Login

And I click "pages link"
And I wait for 2 seconds
And I click "New Page button inside pages module"
And I wait for 2 seconds
And I enter text in "page title field inside pages editor"
And I wait for 2 seconds
And I enter text in "page body field inside pages editor"
And I wait for 4 seconds
And I click "Publish button inside pages editor"
And I wait for 3 seconds
And I click "Right now dropdown inside pages publish"
And I wait for 2 seconds
And I click "Schedule button inside pages publish"
And I wait for 3 seconds
And I click "Continue button after pages editor"
And I wait for 3 seconds
And I click "Publish page button after pages editor"
And I wait for 3 seconds
And I click "Back to Editor button inside pages publish"
And I wait for 2 seconds
And I click "Back to pages button inside pages editor"
##Exit Ghost-Begin
And I wait for 3 seconds
And I click perfil
And I wait for 2 seconds
And I close my session
And I wait for 3 seconds
##Exit Ghost-End


#############################################################################################
########## Escenario 7: Como usuario deseo hacer unschedule de una pagina agendada ##########
#############################################################################################
@user207 @web
Scenario: Como usuario deseo hacer unschedule de una pagina agendada
Given  I navigate to page "http://localhost:2368/ghost/#/signin"

#Start Ghost-Login
And I wait for 3 seconds
And I enter email sign in
And I wait for 2 seconds
And I enter password
And I click next
And I wait for 2 seconds
#Start Ghost-Login

And I click "pages link"
And I wait for 2 seconds
And I click "New Page button inside pages module"
And I wait for 2 seconds
And I enter text in "page title field inside pages editor"
And I wait for 2 seconds
And I enter text in "page body field inside pages editor"
And I wait for 4 seconds
And I click "Publish button inside pages editor"
And I wait for 3 seconds
And I click "Right now dropdown inside pages publish"
And I wait for 2 seconds
And I click "Schedule button inside pages publish"
And I wait for 3 seconds
And I click "Continue button after pages editor"
And I wait for 3 seconds
And I click "Publish page button after pages editor"
And I wait for 3 seconds
And I click "Back to pages button inside pages publish"
And I wait for 2 seconds
And I click "Back to pages button inside pages editor"
And I wait for 2 seconds
And I click "First page inside pages module"
And I wait for 2 seconds
And I click "Unschedule button inside pages module"
And I wait for 2 seconds
And I click "Convert to Draft button inside pages module"
And I wait for 2 seconds
And I click "Back to pages button inside pages editor"
##Exit Ghost-Begin
And I wait for 3 seconds
And I click perfil
And I wait for 2 seconds
And I close my session
And I wait for 3 seconds
##Exit Ghost-End


#############################################################################################
########## Escenario 8: Como usuario deseo hacer unpublish de una pagina publicada ##########
#############################################################################################
@user208 @web
Scenario: Como usuario deseo hacer unpublish de una pagina publicada
Given  I navigate to page "http://localhost:2368/ghost/#/signin"

#Start Ghost-Login
And I wait for 3 seconds
And I enter email sign in
And I wait for 2 seconds
And I enter password
And I click next
And I wait for 2 seconds
#Start Ghost-Login

And I click "pages link"
And I wait for 2 seconds
And I click "New Page button inside pages module"
And I wait for 2 seconds
And I enter text in "page title field inside pages editor"
And I wait for 2 seconds
And I enter text in "page body field inside pages editor"
And I wait for 4 seconds
And I click "Publish button inside pages editor"
And I wait for 3 seconds
And I click "Right now dropdown inside pages publish"
And I wait for 2 seconds
And I click "Schedule button inside pages publish"
And I wait for 3 seconds
And I click "Continue button after pages editor"
And I wait for 3 seconds
And I click "Publish page button after pages editor"
And I wait for 3 seconds
And I click "Back to pages button inside pages publish"
And I wait for 2 seconds
And I click "Back to pages button inside pages editor"
And I wait for 2 seconds
And I click "Search button inside pages module"
#And I wait for 2 seconds
#And I click "Published pages option inside filter dropdown"
And I wait for 2 seconds
And I search for results "entering text in input field inside pages module"
And I wait for 2 seconds
And I click "on Select option found inside pages module"
And I wait for 2 seconds
And I click "Unpublish button inside pages editor"
And I wait for 2 seconds
And I click "Convert to Draft button inside pages module"
And I wait for 2 seconds
And I click "Back to pages button inside pages editor"
##Exit Ghost-Begin
And I wait for 3 seconds
And I click perfil
And I wait for 2 seconds
And I close my session
And I wait for 3 seconds
##Exit Ghost-End

#############################################################################################
################### Escenario 10: Como usuario deseo eliminar una pagina  ###################
#############################################################################################
@user210 @web
Scenario: Como usuario deseo eliminar una pagina 
Given  I navigate to page "http://localhost:2368/ghost/#/signin"

#Start Ghost-Login
And I wait for 15 seconds
And I enter email sign in
And I wait for 2 seconds
And I enter password
And I click next
And I wait for 2 seconds
#Start Ghost-Login

And I click "pages link"
And I wait for 2 seconds
And I click "New Page button inside pages module"
And I wait for 2 seconds
And I enter text in "page title field inside pages editor"
And I wait for 2 seconds
And I enter text in "page body field inside pages editor"
And I wait for 4 seconds
And I click "Publish button inside pages editor"
And I wait for 3 seconds
And I click "Continue button after pages editor"
And I wait for 3 seconds
And I click "Publish page button after pages editor"
And I wait for 3 seconds
And I click "Back to Editor button inside pages publish"
And I wait for 2 seconds
And I click "Back to pages button inside pages editor"
And I wait for 2 seconds
And I click "First page inside pages module"
And I wait for 2 seconds
And I click "Side menu button inside posts editor"
And I wait for 2 seconds
And I click "Delete post button inside posts editor"
And I wait for 2 seconds
And I click "Delete confirmation button inside posts editor"
##Exit Ghost-Begin
And I wait for 3 seconds
And I click perfil
And I wait for 2 seconds
And I close my session
And I wait for 3 seconds
##Exit Ghost-End