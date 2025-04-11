//Aca va todo lo del arrow function

import { useState } from "react";

const AreYouAShrimp: React.FC = () => {
    const [isShrimp, setIsShrimp] = useState<boolean | null>(null);

    const handleYes = () => {
        setIsShrimp(true);
    };

    const handleNo = () => {
        alert('Congrats, no shrimp detected')
        setIsShrimp(false);
    };

    return (
        <div className="shrimp-container">
            <h1 className="shrimp-title"> Are YOU a shrimp?</h1>
            <div className="shrimp-button">
                <button className="shrimp-button-yes" onClick={handleYes}>
                    Yes
                </button>
                <button className="shrimp-button-no" onClick={handleNo}>
                    No
                </button>
                <a href="./Menu.html" className="return-menu">Menu</a>
            </div>

            {isShrimp && (
                <div className="shrimp-img-container">
                    <img 
                    src="/shrimp_detected.jpg"
                    alt="Shrimp"
                    className="shrimp-img"
                    />
                </div>
            )}
        </div>
    );
};


export default AreYouAShrimp