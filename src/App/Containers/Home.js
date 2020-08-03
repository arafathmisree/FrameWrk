import React from "react";

import SocialButton from "../Components/socialLogin/";

import { GoogleLogin } from "react-google-login";

function Home() {
  const handleSocialLogin = (user) => {
    console.log(user);
  };

  const handleSocialLoginFailure = (err) => {
    console.error(err);
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div>
      <h2>Home</h2>

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

export default Home;
