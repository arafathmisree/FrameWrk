import React, { useState } from "react";

import "../assets/styles/main.css";

import { Button } from "../Components/atoms/Button";
import { Card } from "../Components/atoms/Card";
import { Typography } from "../Components/atoms/Typography";
import ImageUploader from "react-images-upload";

import { Textfield } from "../Components/atoms/Textfield";
import { ImageComponent } from "../Components/atoms/ImageComponent";

function Profile() {
  //Set Uploaded Picture
  function onDrop(file) {
    setPicture(URL.createObjectURL(file[0]));
  }

  //Default Picture
  const [picture, setPicture] = useState(
    "https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
  );
  return (
    <div>
      <div className="flex justify-center p-8 md:pt-24">
        <Card type="primary" size="small">
          <Typography color="primary" type="h1">
            John Doe
          </Typography>
          <div
            style={{
              textAlign: "center",
              width: 120,
              borderRadius: "50%",
              borderWidth: 10,
            }}
          >
            <ImageComponent image={picture} />
          </div>
          <div>
            <ImageUploader
              withIcon={true}
              onChange={onDrop}
              imgExtension={[".jpg", ".gif", ".png", ".gif"]}
              maxFileSize={5242880}
              buttonText={"Change Picture"}
              label={""}
              singleImage={true}
              withIcon={false}
            />
          </div>
          <div className="mt-4">
            <Textfield label="First name"></Textfield>
            <Textfield label="Last name"></Textfield>
            <Textfield label="User name"></Textfield>
            <Textfield label="Email"></Textfield>
            <Textfield label="Mobile Number"></Textfield>
            <Textfield label="Address 1"></Textfield>
            <Textfield label="Address 2"></Textfield>
            <Textfield label="Zip Code"></Textfield>
          </div>

          <div className="text-center my-4">
            <Button type="primary" className="ml-2">
              Save
            </Button>
          </div>

          <div className="text-center my-4">
            <Button type="danger" className="ml-2">
              Cancel
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Profile;
