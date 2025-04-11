import React from "react";

interface props {
    label: string;
    onClick: () => void;
}

const Boton: React.FC<props> = ({label, onClick}) => {
    return (
        <button onClick={onClick}>
        {label}
        </button>
    );
};

export default Boton