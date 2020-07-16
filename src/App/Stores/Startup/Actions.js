import {createActions} from 'reduxsauce';

//javascrip actions as object

const {Types, Creators} = createActions({
  loadData: null,
});

export const STARTUP = Types;
export default Creators;
