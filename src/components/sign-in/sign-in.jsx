import React from "react";
import "./sign-in.scss";
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="sign-in_title"> I already have an account </h2>
        <span className="sign-in_subtitle">
          Sign in with email and password
        </span>

        <form action="" className="sign-in_form" onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            label="email"
            value={this.state.email}
            type="text"
            className="form-input"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            label="password"
            value={this.state.password}
            type="password"
            className="form-input"
            required
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

// {
//     apiKey: "AIzaSyATTYZ3z9XVkDDMLrFUkXadV00enEVa7gY",
//     authDomain: "mytsy-db.firebaseapp.com",
//     databaseURL: "https://mytsy-db.firebaseio.com",
//     projectId: "mytsy-db",
//     storageBucket: "mytsy-db.appspot.com",
//     messagingSenderId: "835089694417",
//     appId: "1:835089694417:web:8ae085f5908f3a908a0ff0",
//     measurementId: "G-NDBFE66CPK"
//   };
