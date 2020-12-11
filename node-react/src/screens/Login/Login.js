import React, { Component } from "react";
import "./App.css";
import axios from 'axios';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //username: null,
      email: null,
      senha: null,
      formErrors: {
        //username: "",
        email: "",
        senha: ""
      },
      message: []
    };
  }

  GET_request() {
    axios.get('https://localhost:3000/login', {
      params: {
        email: this.state.email,
        senha: this.state.senha
      }
    }).then(response => {
      this.setState({ message: response.data.message });
      console.log(this.state.message);
    }).catch(error => {
      console.log(error);
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      this.GET_request();
    } else {
      console.error("Formulário inválido.");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "senha":
        formErrors.senha =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>API - Estoque</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>

            <div className="senha">
              <label htmlFor="senha">Senha</label>
              <input
                className={formErrors.senha.length > 0 ? "error" : null}
                placeholder="Senha"
                type="senha"
                name="senha"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.senha.length > 0 && (
                <span className="errorMessage">{formErrors.senha}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Acessar</button>
              <small>{this.state.message}</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;