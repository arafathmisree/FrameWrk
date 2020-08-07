import React from "react";

function Textfield(props) {
  const { label } = props;
  return (
    <div>
      {label && <label for="fname">{label}</label>}
      <input type="text" className="border border-gray-600 px-8 py-2" {...props} />
    </div>
  );
}
export default Textfield;
