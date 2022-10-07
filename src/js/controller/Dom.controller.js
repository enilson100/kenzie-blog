import DashboardRequest from "./Dashboard.controller.js";

export default class HomePage {
  static async inserirDados(dados) {
    const div = document.querySelector(".container_header");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const nome = document.createElement("h2");

    img.classList.add("img");
    nome.classList.add("nome");

    img.src = dados.avatarUrl;
    nome.innerText = dados.username;

    img.classList.add("img");
    nome.classList.add("nome");
    figure.appendChild(img);
    div.append(figure, nome);
  }
  static criarPost(dados) {
    const ul = document.querySelector(".list_post");
    const li = document.createElement("li");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const nome = document.createElement("h2");
    const conteudo = document.createElement("p");
    const data = document.createElement("p");
    const dataTratada = dados.createdAt.slice(0, 10);
    const div = document.createElement("div");
    div.classList.add("row");
    li.classList.add("list");
    img.classList.add("img");
    nome.classList.add("nome");
    data.classList.add("data");
    img.src = dados.user.avatarUrl;
    nome.innerText = dados.user.username;
    conteudo.innerText = dados.content;
    data.innerText = dataTratada;

    figure.appendChild(img);
    div.append(figure, nome);
    li.append(div, conteudo, data);
    ul.appendChild(li);
  }
  static postUser(dados, idPost) {
    const ul = document.querySelector(".list_post");
    const li = document.createElement("li");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const nome = document.createElement("h2");
    const conteudo = document.createElement("p");
    const data = document.createElement("p");
    const dataTratada = dados.createdAt.slice(0, 10);
    const buttondelete = document.createElement("button");
    const buttonEdite = document.createElement("button");
    img.classList.add("img");
    const div = document.createElement("div");
    div.classList.add("row");
    li.classList.add("list");
    img.classList.add("img");
    nome.classList.add("nome");
    data.classList.add("data");
    buttonEdite.classList.add("button_edite");
    buttondelete.classList.add("button_delete");

    img.src = dados.user.avatarUrl;
    nome.innerText = dados.user.username;
    conteudo.innerText = dados.content;
    data.innerText = dataTratada;
    buttonEdite.innerText = "Editar";
    buttondelete.innerText = "Deletar";
    buttonEdite.id = idPost;
    buttondelete.id = idPost;

    buttondelete.addEventListener("click", async (e) => {
      const id = e.target.id;
      await DashboardRequest.deletePost(id);
      window.location.reload(true);
    });
    const modal = document.querySelector(".divModal");
    buttonEdite.addEventListener("click", (e) => {
      modal.style.display = "block";
    });
    const imgButton = document.querySelector(".buttonFechar");
    imgButton.addEventListener("click", (e) => {
      modal.style.display = "none";
    });

    figure.appendChild(img);
    div.append(figure, nome);
    li.append(div, conteudo, data, buttonEdite, buttondelete);
    ul.appendChild(li);

    const salvar = document.querySelector(".buttonSalvar");
    salvar.id = idPost;
    salvar.addEventListener("click", async (e) => {
      e.preventDefault();
      const id = e.target.id;
      const dados = {};
      const formValue = [...e.target.form];
      formValue.forEach((text) => {
        if (text.value !== "") {
          dados[text.name] = text.value;
        }
      });

      const salvarDados = await DashboardRequest.postEdite(dados, id);
      window.location.reload(true);
    });
  }
}
