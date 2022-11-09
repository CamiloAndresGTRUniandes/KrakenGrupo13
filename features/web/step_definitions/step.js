const { Given, When, Then } = require('@cucumber/cucumber');
const { Before, BeforeAll, After, AfterAll } = require('@cucumber/cucumber');
const {Login} = require('./pages_object/login.js');
const loginFrm= new Login("Incio");

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

When('I click member',async function(){
let element = await this.driver.$("li.relative > a[href='#/members/']");
return await element.click();

}
);

When('I click member-error',async function(){
let element = await this.driver.$("li.relative > a[href='#/members/']");
return await element.click();
}
);


When('I click new member',async function(){
let element = await this.driver.$("a[href='#/members/new/']");
return await element.click();

}
);

When('I enter name', async function () {
let element = await this.driver.$('input[name="name"]');
return await element.setValue('Juan valdes');
});


When ('I say hello world', async function()
{
 console.log( "Hello");
}
);