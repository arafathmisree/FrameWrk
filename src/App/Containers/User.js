import React from "react";

import { Button } from "../Components/atoms/Button";

import { connect } from "react-redux";

import StartupActions from "../Stores/Startup/Actions";

function User(props) {


  return (
    <div>
      <h2>User area</h2>

    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
 

});
export default connect(mapStateToProps, mapDispatchToProps)(User);

