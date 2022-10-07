export default class LoginRequest {
  static url = "https://blog-m2.herokuapp.com/users/login";

  static async login(loginData) {
    return await fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("@kenzie-blog:user", JSON.stringify(res.userId));
        localStorage.setItem("@kenzie-blog:token", JSON.stringify(res.token));
        return res;
      })
      .catch((err) => console.log(err));
  }
}
