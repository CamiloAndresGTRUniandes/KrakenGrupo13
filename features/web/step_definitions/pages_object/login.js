class Login {
constructor(msg) {
this.msg= msg;
this.txtEmail='input[name="identification"]';
this.txtPassword='input[name="password"]';
this.btnLogin='button[id="ember10"]';
this.msgError=".main-error";
}

}
module.exports = {
  Login,
};
