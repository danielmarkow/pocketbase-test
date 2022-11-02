import {useState} from "react";

import {client} from "../config.js";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authData, setAuthData] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    client.users.authViaEmail(email, password)
        .then((resp) => setAuthData(resp))
        .catch((err) => console.log(err))
  };

  return (
      <div className="text-center">
      <main className="form-signin w-100 m-auto">
        <form onSubmit={onSubmit}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
              <input
                  type="input"
                  className="form-control"
                  id="emailInput"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
                <label htmlFor="emailInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                  type="password"
                  className="form-control"
                  id="passwordInput"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
                <label htmlFor="passwordInput">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
      </main>
      </div>
  );
}

export default Login;