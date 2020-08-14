import React, { useState } from "react";

import "../assets/styles/main.css";

import { Button } from "../Components/atoms/Button";
import { Card } from "../Components/atoms/Card";
import { Typography } from "../Components/atoms/Typography";
import ImageUploader from "react-images-upload";

import { Textfield } from "../Components/atoms/Textfield";
import { ImageComponent } from "../Components/atoms/ImageComponent";

function Profile() {
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

  function onDropFile(e) {
    const files = e.target.files;
    // Iterate over all uploaded files
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      readFile(file);
    }
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
            <label for="file-upload" class="custom-file-upload">
              <i class="fa fa-cloud-upload"></i> Custom Upload
            </label>
            <input id="file-upload" type="file" onChange={onDropFile} />
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
