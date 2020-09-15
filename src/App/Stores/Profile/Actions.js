import { createActions } from "reduxsauce";

//javascrip actions as object

const { Types, Creators } = createActions({
  userProfile: ["token"],
  userProfileSuccess: ["data"],
  userProfileFailure: ["error"],
  userProfileUpdate: ["token"],
  userProfileUpdateSuccess: ["data"],
  userProfileUpdateFailure: ["error"],
});

export const PROFILE = Types;
export default Creators;
