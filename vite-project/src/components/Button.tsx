import React from "react";
import { FunctionComponent } from 'react';

type Props = {
    label: string,
    onClick: MouseEventHandler;
}

const Button = ({label, onClick}) => {
    return (
      <button onClick={onClick} style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white' }}>
        {label}
      </button>
    );
  };
  
  export default Button;