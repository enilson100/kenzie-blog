import DashboardRequest from "../controller/Dashboard.controller.js";
import HomePage from "../controller/Dom.controller.js";

DashboardRequest.sair();

const id = localStorage.getItem("@kenzie-blog:user");

const userd = await DashboardRequest.requestUserId(id);

await HomePage.inserirDados(userd);

export const list = await DashboardRequest.listAll();

export const listarTodos = (list, home, id) => {
  list.data.forEach((elem) => {
    if (elem.user.id == id) {
      home.postUser(elem, elem.id);
    } else {
      home.criarPost(elem);
    }
  });
};
listarTodos(list, HomePage, id);
