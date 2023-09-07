import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

class AuthService {
  // POST {username, password} & save JWT to Local Storage
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  // Remove JWT from Local Storage
  logout() {
    localStorage.removeItem("user");
  }

  // POST {username, email, password}
  register(firstname, lastname, username, email, password) {
    return axios.post(API_URL + "signup", {
      firstname,
      lastname,
      username,
      email,
      password
    });
  }

  // Get stored user information (including JWT)
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

const authService = new AuthService();

export default authService;
