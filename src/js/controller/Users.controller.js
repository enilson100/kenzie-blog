export default class Cadastrar {
  static url = "https://blog-m2.herokuapp.com/users/register";
   
  static error = ""

  static async cadastrarUser(userData) {
    console.log(userData)
    return await fetch("https://blog-m2.herokuapp.com/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .catch((err) => {
       alert(err)
      })
  }
}
