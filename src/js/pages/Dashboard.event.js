import DashboardRequest from "../controller/Dashboard.controller.js";
import HomePage from "../controller/Dom.controller.js";
import { listarTodos } from "./dashboard.js";

export default class Event {
  static publicar() {
    const publicarButton = document.querySelector(".button_post");

    publicarButton.addEventListener("click", async (e) => {
      e.preventDefault();
      const dadosPessoais = {};
      const formValues = [...e.target.form];

      formValues.forEach((text) => {
        if (text.value !== "") {
          dadosPessoais[text.name] = text.value;
        }
      });
      const functionLogin = await DashboardRequest.postRequest(dadosPessoais);

      if (functionLogin.id !== undefined) {
        document.location.reload(true);
      } else {
        alert(functionLogin.message);
      }
    });
  }
}

Event.publicar();
