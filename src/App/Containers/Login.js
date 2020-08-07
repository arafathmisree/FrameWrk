import React,{ useState, useEffect } from "react";

import SocialButton from "../Components/socialLogin/";

import { GoogleLogin } from "react-google-login";

import { useHistory } from "react-router-dom";

import { connect } from "react-redux";

import StartupActions from "../Stores/Startup/Actions";

import "./style.css";

import {Button} from "../Components/Button";
import {Card} from "../Components/Card";

import {Textfield} from "../Components/Textfield";
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

  const handleChange = (e) =>{
    setUsername(e.target.value)
    setEmailValid(validateEmail(username))
 
  }

  const handleChangePassword = (e) =>{
    setPassword(e.target.value)
    if(password > 6) {
      passwordValid(true)
    }else{
      passwordValid(false)
    }
  }


  const login = () =>{
    if(pass && emailValid){
      alert('valid')
    }else {
      alert('invalid')
    }
  
 
  }


  const gotToSignUp = () =>{
   
   history.push("/signUp");
 
  }

  return (
    <div>

       <Card >
        
      <div id="animm" className="center">
      <div className="marginCenter">
      <div className="textfieldWrap">
        <h2>Log-In</h2>
      
        <Textfield placeholder="username"  onChange={handleChange} className="input1"></Textfield>
        <Textfield  placeholder="password" onChange={handleChangePassword} className="input2"></Textfield>

        <div className="buttonMargin"> <Button onClick={gotToSignUp} type="primary" className="w-48">Dont have an account?</Button></div>
        </div>
        <div className="wrapperButton">
          <div className="button1" >
            <SocialButton
              provider="facebook"
              appId="420968585473340"
              onLoginSuccess={handleSocialLogin}
              onLoginFailure={handleSocialLoginFailure}
            >
              Login with Facebook
            </SocialButton>
          </div>

          <div className="button2">
            <GoogleLogin
              clientId="648513583046-6ingms3kmgge2nng0tq4tfdjnn51eug2.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              className="buttonGoogle"
              cookiePolicy={"single_host_origin"}
            />
          </div>
          <div className="button3">
        <Button onClick={login} type="primary" className="w-48">sign-In</Button>
        </div>
        </div>
     
    
        </div>
      </div>
         
          </Card>
      
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setUserData: (user) => dispatch(StartupActions.setUserData(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
