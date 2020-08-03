import React from "react";

import SocialButton from "../Components/socialLogin/";

import { GoogleLogin } from "react-google-login";

import { useHistory } from "react-router-dom";

import { connect } from 'react-redux';

import StartupActions from '../Stores/Startup/Actions'


function Login(props) {

  const history = useHistory();


  const handleSocialLogin = (user) => {

    if (user._token) {
         this.props.setUserData(user)
         history.push("/dashboard");
    } else {
        alert ('login error')
    }
    console.log(user);
  };

  const handleSocialLoginFailure = (err) => {
    console.error(err);
  };

  const responseGoogle = (response) => {

    

    if (response.accessToken) {
        props.setUserData(response)
        history.push("/dashboard");
   } else {
       alert ('login error')
   }
    console.log(response);
  };

  return (
    <div>
      <h2>Log-In</h2>

      <div>
        <SocialButton
          provider="facebook"
          appId="420968585473340"
          onLoginSuccess={handleSocialLogin}
          onLoginFailure={handleSocialLoginFailure}
        >
          Login with Facebook
        </SocialButton>
      </div>

      <div>
        <GoogleLogin
          clientId="648513583046-6ingms3kmgge2nng0tq4tfdjnn51eug2.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
 
});

const mapDispatchToProps = (dispatch) => ({
    setUserData:  (user) => dispatch(StartupActions.setUserData(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login)
