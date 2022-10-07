export default class DashboardRequest {
  static base_url = "https://blog-m2.herokuapp.com/";
  static token = JSON.parse(localStorage.getItem("@kenzie-blog:token"));
  static headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${this.token}`,
  };
  static async requestUserId(user_id) {
    return await fetch(`${DashboardRequest.base_url}/users/${user_id}`, {
      method: "GET",
      headers: this.headers,
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }
  static async listAll() {
    return await fetch(`${this.base_url}posts?page=1`, {
      method: "GET",
      headers: this.headers,
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }
  static sair() {
    const buttonSair = document.querySelector(".buttonSair");
    buttonSair.addEventListener("click", (e) => {
      location.href = "../../../index.html";
      localStorage.removeItem("@kenzie-blog:user");
      localStorage.removeItem("@kenzie-blog:token");
    });
  }
  static async postRequest(dados) {
    return await fetch(`${this.base_url}posts`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(dados),
    })
      .then((res) => res.json())
      .catch((err) => {
        alert(err);
      });
  }
  static async deletePost(idPost){
    return await fetch(`${this.base_url}posts/${idPost}`, {
      method: "DELETE",
      headers: this.headers
    })
    .then(res => res.json())
    .catch(err => console.log(err))
  }
  static async postEdite(dados, postId) {
    return await fetch(`${this.base_url}posts/${postId}`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(dados),
    })
      .then((res) => res.json())
      .catch((err) => {
        alert(err);
      });
  }
}
