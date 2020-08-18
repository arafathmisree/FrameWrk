import { createActions } from "reduxsauce";

//javascrip actions as object

const { Types, Creators } = createActions({
  userProfile: ["token"],
  userProfileSuccess: ["profile"],
  userProfileFailure: ["error"],
});

export const PROFILE = Types;
export default Creators;
