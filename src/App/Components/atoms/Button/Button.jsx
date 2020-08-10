import React from "react";

import {ButtonType, ButtonSize} from './ButtonStyles';

function Button({size='sm', type, children, className}) {

  return (
    <button className={`${ButtonType[type]} ${ButtonSize[size]} ${className}`}>{children}</button>
  )
}
export default Button;
