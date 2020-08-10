import React from "react";
import {Typography} from '../Typography';

function Textfield(props) {
  const { label } = props;

  return (
    <div className="flex flex-col">
      {label && <Typography color="primary" type="body2"> {label} </Typography>}
      <input type="text" className="text-sm border border-gray-400 px-4 py-2 rounded" placeholder="Placeholder text" {...props} />
      <span className="text-xs py-2">Textfield support message</span>
    </div>
  );
}
export default Textfield;
