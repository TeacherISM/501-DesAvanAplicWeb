import React from "react";

interface inputs {
    type: string;
    placeholder: string;
    value: string;
    onChange: () => void;
}

const fieldInput: React.FC<inputs> = ({type, placeholder, value,onChange}) => {
    return (
        <input 
        type={type} placeholder={placeholder} value={value} onClick={onChange}
        style={{padding: '10px 20px', backgroundColor:'green', margin: '5px' }}
        />
    );
};

export default fieldInput