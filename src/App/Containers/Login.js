import React, { useState, useEffect } from "react";

import SocialButton from "../Components/atoms/socialLogin/";

import { GoogleLogin } from "react-google-login";

import { useHistory } from "react-router-dom";

import { connect } from "react-redux";

import StartupActions from "../Stores/Startup/Actions";

import "../Assets/styles/main.css";

import { Button } from "../Components/atoms/Button";
import { Card } from "../Components/atoms/Card";
import {Typography} from "../Components/atoms/Typography";

import { Textfield } from "../Components/atoms/Textfield";
import { validateEmail } from "../Utils/Validations";

function Login(props) {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [pass, passwordValid] = useState(false);

  const handleSocialLogin = (user) => {
    if (user._token) {
      props.setUserData(user);
      history.push("/dashboard");
    } else {
      alert("login error");
    }
    console.log(user);
  };

  const handleSocialLoginFailure = (err) => {
    console.error(err);
  };

  const responseGoogle = (response) => {
    if (response.accessToken) {
      props.setUserData(response);
      history.push("/dashboard");
    } else {
      alert("login error");
    }
    console.log(response);
  };

  const handleChange = (e) => {
    setUsername(e.target.value)
    setEmailValid(validateEmail(username))

  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
    if (password > 6) {
      passwordValid(true)
    } else {
      passwordValid(false)
    }
  }


  const login = () => {
    if (pass && emailValid) {
      alert('valid')
    } else {
      alert('invalid')
    }


  }


  const gotToSignUp = () => {

    history.push("/signUp");

  }

  return (
    <div>

      <div className="flex justify-center p-8 md:pt-24">
      <Card type="primary" size="small">

        <div id="animm">

            <div>
              <Typography color="primary" type="h1">Log in to your account</Typography>

              <Textfield placeholder="username" onChange={handleChange}></Textfield>
              <Textfield placeholder="password" onChange={handleChangePassword}></Textfield>
            </div>



            <div className="flex justify-between mt-4"> 
              <Button onClick={gotToSignUp} type="outline" className="mr-2">Dont have an account?</Button>
              <Button onClick={login} type="primary" className="ml-2">Sign in</Button>
            </div>

            <div className="text-center my-4">
              <Typography color="primary" type="body1">or sign using</Typography>
            </div>

            <div className="flex justify-around">
                <SocialButton
                  provider="facebook"
                  appId="420968585473340"
                  onLoginSuccess={handleSocialLogin}
                  onLoginFailure={handleSocialLoginFailure}
                >
                  Login with Facebook
              </SocialButton>

                <GoogleLogin
                  clientId="648513583046-6ingms3kmgge2nng0tq4tfdjnn51eug2.apps.googleusercontent.com"
                  render={renderProps => (
                    <Button type="outline" onClick={renderProps.onClick} disabled={renderProps.disabled}>Google</Button>
                  )}
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
            </div>
        </div>

      </Card>

    </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setUserData: (user) => dispatch(StartupActions.setUserData(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
