import React from 'react';
import Button from "../components/Button";  

const Success: React.FC<{ GoBack: () => void }> = ({ GoBack }) => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Login Successful!</h1>
            <h1>You have made it!</h1>
            <Button label="Back" onClick={GoBack} />
        </div>
    );
};

export default Success;
