import React from "react";


import "../assets/styles/main.css";

import { Button } from "../Components/atoms/Button";
import { Card } from "../Components/atoms/Card";
import { Typography } from "../Components/atoms/Typography";

import { Textfield } from "../Components/atoms/Textfield";

function SignUp() {

  return (
    <div>

      <div className="flex justify-center p-8 md:pt-24">
        <Card type="primary" size="small">
          
          <Typography color="primary" type="h1">Sign up form</Typography>

          <div className="mt-4">
            <Textfield placeholder="First name"></Textfield>
            <Textfield placeholder="Last name"></Textfield>
            <Textfield placeholder="Mobile"></Textfield>
            <Textfield placeholder="Country Code"></Textfield>
            <Textfield placeholder="Email"></Textfield>
          </div>

          <div className="flex justify-between mt-4">
            <Button type="primary" className="ml-2">Sign in</Button>
          </div>

          <div className="text-center my-4">
            <Typography color="primary" type="body1">or sign up using</Typography>
          </div>

          <div className="flex">
            <Button type="outline"> Facebook </Button>
            <Button type="outline" className="mx-4">Google</Button>
          </div>

        </Card>
      </div>

    </div>
  );
}

export default SignUp;
