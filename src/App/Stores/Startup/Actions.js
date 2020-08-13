import {createActions} from 'reduxsauce';

//javascrip actions as object

const {Types, Creators} = createActions({
  loadData: null,
  setUserData : ['user'],
  setRole : ['role']
});

export const STARTUP = Types;
export default Creators;
