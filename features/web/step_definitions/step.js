const {faker}= require("@faker-js/faker");  
const { Given, When, Then } = require('@cucumber/cucumber');
const { Before, BeforeAll, After, AfterAll } = require('@cucumber/cucumber');
const {Login} = require('./pages_object/login.js');
const {Member} = require('./pages_object/Member');
const  {Home} = require('./pages_object/Home');

const memberFrm= new Member(faker.internet.exampleEmail() );
const loginFrm= new Login("Incio");
const homeFrm= new Home();


When('I enter email {string}', async function (email){
let element = await this.driver.$(loginFrm.txtEmail);
return await element.setValue(email);
});
When('I enter password', async function () {
let element = await this.driver.$(loginFrm.txtPassword);

return await element.setValue('YonathanBr1983*');
});
When('I click next', async function() {
let element = await this.driver.$(loginFrm.btnLogin);
return await element.click();
});

When('I select first meber', async function() {
let element = await this.driver.$(loginFrm.btnLogin);
return await element.click();
});



///Functions' members

When('I click member',async function(){
let element = await this.driver.$("li.relative > a[href='#/members/']");
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
return await element.setValue(faker.name.fullName());
});

When('I enter email member', async function (){
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


When('I selected first member',async function (){
let element = await this.driver.$('table');
return await element.click();
});

When('I search by email member', async function()
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