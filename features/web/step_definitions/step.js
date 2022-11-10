const {faker}= require("@faker-js/faker");  
const { Given, When, Then } = require('@cucumber/cucumber');
const { Before, BeforeAll, After, AfterAll } = require('@cucumber/cucumber');
const {Login} = require('./pages_object/login.js');
const {Member} = require('./pages_object/Member');
const  {Home} = require('./pages_object/Home');
const {UserData} = require('./pages_object/userData');

const memberFrm= new Member(faker.internet.exampleEmail() );
const loginFrm= new Login("Incio");
const homeFrm= new Home();
const userData = new UserData();


When('I enter email sign in', async function (){
let element = await this.driver.$(loginFrm.txtEmail);
return await element.setValue(userData.emailAdmin);
});
When('I enter password', async function () {
let element = await this.driver.$(loginFrm.txtPassword);

return await element.setValue(userData.passwordAdmin);
});
When('I click next', async function() {
let element = await this.driver.$(loginFrm.btnLogin);
return await element.click();
});
///Functions' members

When('I click member',async function(){
let element = await this.driver.$(homeFrm.member);
return await element.click();
}
);


When('I click new member',async function(){
let element = await this.driver.$("a[href='#/members/new/']");
return await element.click();
}
);
                        


When('I enter name member', async function () {
let element = await this.driver.$(memberFrm.txtName);
memberFrm.setNewName(faker.name.fullName());
return await element.setValue(memberFrm.name);
});

When('I enter email member', async function (){
this.email=faker.internet.exampleEmail();
let element = await this.driver.$(memberFrm.txtEmail);
return await element.setValue(memberFrm.email);
});

When('I enter note member', async function (){
let element = await this.driver.$(memberFrm.txtMemberNote);
return await element.setValue(faker.lorem.paragraph());
});


When ('I save new member', async function (){
let element = await this.driver.$(memberFrm.btnSave);
return await element.click();
});
When ('I save member', async function (){
let element = await this.driver.$(memberFrm.btnSave);
return await element.click();
});


When('I selected first member',async function (){
let element = await this.driver.$('table');
return await element.click();
});

When('I search by email member', async function()
{
let element = await this.driver.$(memberFrm.txtSearch);
return await element.setValue(memberFrm.email); 
});

When('I search by name member', async function()
{
let element = await this.driver.$(memberFrm.txtSearch);
return await element.setValue(memberFrm.email); 
});



// Home-Dashboard
When('I click perfil',async function(){
let element = await this.driver.$('.gh-user-avatar.relative' );
return await element.click();
}
);
         
When('I click your profile',async function(){
                               
let element = await this.driver.$(this.aYourProfile);
return await element.click();
}
);

When('I close my session',async function(){
let element = await this.driver.$('/html/body/div[1]/div/ul/li[9]/a');
return await element.click();
}
);


When ('I say hello world', async function()
{
 console.log( "Hello");
}
);