import React, { Component } from "react";
import { SignWithGoogle } from "../../../firebase/firebase.util";
import Input from "../../../Global/Input/Input";
import "./Login.css";
export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { Email: "", Password: "" },
    };
  }

  render() {
    let SubmitForm = (e) => {
      e.preventDefault();
    };
    let LoginDetails = (e) => {
      let name, value;
      value = e.target.value;
      name = e.target.name;
      this.setState({ user: { ...this.state.user, [name]: value } });
      console.log(this.state.user);
    };

    return (
      <>
        <section className="Login d-center">
          <div className="container ">
            <div className=" border border-2">
              <div className="row d-flex  p-5">
                <div className="col-6">
                  <img src="./Assest/Tablet login.gif" alt="" />
                </div>

                <div className="col-6 px-5">
                  <h3 className="subtitle text-center">Login</h3>
                  <div className="py-3">
                    <form action="" onClick={SubmitForm}>
                      <Input
                        type="text"
                        placeholder="Enter your Email"
                        name="Email"
                        change={LoginDetails}
                        css="Account"
                      />
                      <Input
                        type="Password"
                        placeholder="Enter your Password"
                        name="Password"
                        change={LoginDetails}
                        css="Account"
                      />

                      <Input
                        type="submit"
                        placeholder="Enter your Password"
                        name="Password"
                        change={LoginDetails}
                        css="AccountSubmit"
                        value="Login"
                      />
                    </form>
                  </div>

                  <h5 className="text-center">or</h5>
                  <hr />
                  <div className="socialLInk pt-3 d-flex justify-content-around ">
                    <div className="socialIcon d-flex ">
                      <div className="googleIcon mx-3">
                        <i class="fab fa-google" onClick={SignWithGoogle}></i>
                      </div>

                      <div className="facebookIcon mx-3">
                        <i class="fab fa-facebook"></i>
                      </div>

                      <div className="twitterIcon mx-3">
                        <i class="fab fa-twitter"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Login;
