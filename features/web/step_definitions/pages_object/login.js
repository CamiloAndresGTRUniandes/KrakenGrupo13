class Login {
constructor(msg) {
this.msg= msg;
this.txtEmail='input[name="identification"]';
this.txtPassword='input[name="password"]';
this.btnLogin='/html/body/div[2]/div/main/div[1]/div/section/form/button/span';
this.msgError=".main-error";
}

}
module.exports = {
  Login,
};
