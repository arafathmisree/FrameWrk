import React, { useState } from "react";

import "../assets/styles/main.css";

import { Button } from "../Components/atoms/Button";
import { Card } from "../Components/atoms/Card";
import { Typography } from "../Components/atoms/Typography";

import { Textfield } from "../Components/atoms/Textfield";
import { ImageComponent } from "../Components/atoms/ImageComponent";

const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  width: "100%",
};

let inputElement = "";

function Profile() {
  //Default Picture

  function onUploadClick(e) {
    e.target.value = null;
  }

  const [picture, setPicture] = useState(
    "https://banner2.cleanpng.com/20180802/icj/kisspng-user-profile-default-computer-icons-network-video-the-foot-problems-of-the-disinall-foot-care-founde-5b6346121ec769.0929994515332326581261.jpg"
  );

  function triggerFileUpload() {
    inputElement.click();
  }

  function onDropFile(e) {
    const files = e.target.files;
    // Iterate over all uploaded files
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      readFile(file);
    }
  }

  function readFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      // Read the image via FileReader API and save image result in state.
      reader.onload = function (e) {
        // Add the file name to the data URL
        let dataURL = e.target.result;
        dataURL = dataURL.replace(";base64", `;name=${file.name};base64`);
        setPicture(dataURL);
        resolve({ file, dataURL });
      };
      reader.readAsDataURL(file);
    });
  }

  return (
    <div>
      <div className="flex justify-center p-8 md:pt-24">
        <Card type="primary" size="small">
          <div className="flex justify-center">
            <Typography color="primary" type="h1">
              John Doe
            </Typography>
          </div>
          <div className=" flex justify-center mt-2">
            <div className="rounded-full w-3/4">
              <ImageComponent image={picture} />
            </div>
          </div>
          <div>
            <input
              style={{ visibility: "hidden" }}
              type="file"
              id="myFile"
              name="filename"
              ref={(input) => (inputElement = input)}
              onChange={onDropFile}
              onClick={onUploadClick}
            />
            <div className="flex justify-center">
              <Button onClick={triggerFileUpload} type="outline" className="mr-2">
                Change Picture
              </Button>
            </div>
          </div>
          <div className="mt-4">
            <Textfield label="First name" placeholder="First name" type="primary" size="sm"></Textfield>
          </div>
          <div className="mt-4">
            <Textfield label="Last name" placeholder="Last name" type="primary" size="sm"></Textfield>
          </div>
          <div className="mt-4">
            <Textfield label="User name" placeholder="User name" type="primary" size="sm"></Textfield>
          </div>
          <div className="mt-4">
            <Textfield label="Email" placeholder="Email" type="primary" size="sm"></Textfield>
          </div>
          <div className="mt-4">
            <Textfield label="Mobile Number" placeholder="Mobile Number" type="primary" size="sm"></Textfield>
          </div>
          <div className="mt-4">
            <Textfield label="Address 1" placeholder="Address 1" type="primary" size="sm"></Textfield>
          </div>
          <div className="mt-4">
            <Textfield label="Address 2" placeholder="Address 2" type="primary" size="sm"></Textfield>
          </div>
          <div className="mt-4">
            <Textfield label="Zip Code" placeholder="Zip Code" type="primary" size="sm"></Textfield>
          </div>

          <div className="flex mt-8">
            <Button type="primary" className="mr-2">
              Save
            </Button>
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
