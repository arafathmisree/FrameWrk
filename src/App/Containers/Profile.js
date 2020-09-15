import React, { useState, useEffect } from "react";

import "../assets/styles/main.css";

import { Button } from "../Components/atoms/Button";
import { Card } from "../Components/atoms/Card";
import { Typography } from "../Components/atoms/Typography";
import axios from "axios";

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

  const [picture, setPicture] = useState(
    props.profile ? props.profile.imageUrl : ""
  );
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState(props.profile ? props.profile.email : "");
  const [phone, setPhone] = useState(
    props.profile
      ? props.profile.mobileNo.countryCode + props.profile.mobileNo.localNumber
      : ""
  );

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    props.userProfile();
  }, [setPicture, setFname, setEmail, setPhone]);

  function onUploadClick(e) {
    e.target.value = null;
  }

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

  function onTextChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    switch (name) {
      case "fname":
        setFname(value);
        break;
      case "lname":
        setLname(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
    }
  }

  function onUpdate() {
    if (!fname || !lname || !phone) {
      alert("Required Fields should not be empty");
      return;
    }
    const data = {
      fullName: `${fname} ${lname}`,
      mobileNo: {
        countryCode: "+94",
        localNumber: phone,
        displayNumber: null,
      },
      imageUrl: picture,
      language: "ENGLISH",
    };

    props.userProfileUpdate(data);
  }

  return (
    props.profile && (
      <div>
        <div className="flex p-8 ">
          <Card type="primary" size="small">
            <div className="flex justify-center">
              <Typography color="primary" type="h1">
                {props.profile ? props.profile.fullName : ""}
              </Typography>
            </div>
            <div className=" flex justify-center mt-2">
              <div className="rounded-full w-3/4">
                {props.profile && props.profile.imageUrl ? (
                  <ImageComponent image={picture} />
                ) : null}
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
                <Button
                  onClick={triggerFileUpload}
                  type="outline"
                  className="mr-2"
                >
                  Change Picture
                </Button>
              </div>
            </div>
            <div className="mt-4">
              <Textfield
                label="First name"
                value={props.profile ? fname : ""}
                name={"fname"}
                placeholder="First name"
                onChange={onTextChange}
                type="primary"
                size="sm"
              ></Textfield>
            </div>
            <div className="mt-4">
              <Textfield
                label="Last name"
                value={props.profile ? lname : ""}
                name={"lname"}
                placeholder="Last name"
                onChange={onTextChange}
                type="primary"
                size="sm"
              ></Textfield>
            </div>
            <div className="mt-4">
              <Textfield
                label="User name"
                placeholder="User name"
                type="primary"
                size="sm"
              ></Textfield>
            </div>
            <div className="mt-4">
              <Textfield
                label="Email"
                disabled={true}
                value={props.profile ? email : ""}
                placeholder="Email"
                type="primary"
                size="sm"
              ></Textfield>
            </div>
            <div className="mt-4">
              <Textfield
                label="Mobile Number"
                value={props.profile ? phone : ""}
                name={"phone"}
                placeholder="Mobile Number"
                onChange={onTextChange}
                type="primary"
                size="sm"
              ></Textfield>
            </div>
            <div className="mt-4">
              <Textfield
                label="Address 1"
                placeholder="Address 1"
                type="primary"
                size="sm"
              ></Textfield>
            </div>
            <div className="mt-4">
              <Textfield
                label="Address 2"
                placeholder="Address 2"
                type="primary"
                size="sm"
              ></Textfield>
            </div>
            <div className="mt-4">
              <Textfield
                label="Zip Code"
                placeholder="Zip Code"
                type="primary"
                size="sm"
              ></Textfield>
            </div>

            <div className="flex mt-8">
              <Button
                type="primary"
                className="mr-2 flex-grow"
                onClick={onUpdate}
              >
                Save
              </Button>
              <Button type="danger" className="ml-2 flex-grow">
                Cancel
              </Button>
            </div>
          </Card>
        </div>
      </div>
    )
  );
}

const mapStateToProps = (state) => ({
  profile: state.profile.userData,
});

const mapDispatchToProps = (dispatch) => ({
  userProfile: () => dispatch(ProfileActions.userProfile()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
