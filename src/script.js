import LoginRequest from "./js/controller/Login.controller.js";
import Cadastrar from "./js/controller/Users.controller.js";


class ComponentesCadastro {
  static criarCadastro() {
    const buttonform = document.querySelector(".cadastrar");
    const body = document.querySelector("body");
    buttonform.addEventListener("click", async (event) => {
      event.preventDefault();
      const data = {};
      const formValues = [...event.target.form];
      formValues.forEach((input) => {
        if (input.value !== "") {
          data[input.name] = input.value;
        }
      });

      const register = await Cadastrar.cadastrarUser(data);
      if (register.id !== undefined) {
        body.className = "sign-in-js";
      } else {
        alert(register.message);
      }
    });
  }
  static logar() {
    const buttonLogin = document.querySelector("#firstLogin");
    const body = document.querySelector("body");
    buttonLogin.addEventListener("click", (e) => {
      body.className = "sign-in-js";
    });
    const btnSignup = document.querySelector("#signup");
    btnSignup.addEventListener("click", (e) => {
      body.className = "sign-up-js";
    });

    const buttonLoginSub = document.querySelector('#buttonLogar')
    buttonLoginSub.addEventListener('click', async (e) => {
      e.preventDefault()
      const id = e.target.id;
      const data = {};
      const formValues = [...e.target.form];
      formValues.forEach((input) => {
        if (input.value !== "") {
          data[input.name] = input.value;
        }
      })
      const functionLogin = await LoginRequest.login(data)
      if(functionLogin.userId !== undefined){
        location.href = "../temp/dashboard.html"
      }else{
        alert(functionLogin.message)
      }
      console.log(functionLogin)
    })
  }
}
ComponentesCadastro.logar();
ComponentesCadastro.criarCadastro();
