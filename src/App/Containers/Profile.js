import React, { useState, useEffect } from "react";

import "../assets/styles/main.css";

import { Button } from "../Components/atoms/Button";
import { Card } from "../Components/atoms/Card";
import { Typography } from "../Components/atoms/Typography";

import { Textfield } from "../Components/atoms/Textfield";
import { ImageComponent } from "../Components/atoms/ImageComponent";
import { connect } from "react-redux";
import ProfileActions from "../Stores/Profile/Actions";

const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  width: "100%",
};

let inputElement = "";

function Profile(props) {
  //Default Picture

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    props.userProfile();
  });

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
            <input
              style={{ visibility: "hidden" }}
              type="file"
              id="myFile"
              name="filename"
              ref={(input) => (inputElement = input)}
              onChange={onDropFile}
              onClick={onUploadClick}
            />
            <Button onClick={triggerFileUpload} type="primary" className="mr-2">
              Change Picture
            </Button>
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  userProfile: () => dispatch(ProfileActions.userProfile()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
