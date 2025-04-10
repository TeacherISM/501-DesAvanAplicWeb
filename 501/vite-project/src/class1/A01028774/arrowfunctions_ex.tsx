import React, { useState } from "react";

function arrowfunction() {
// Funcion normal
//   const [isToggled, setIsToggled] = useState(false);


  
//   function handleClick() {
//     setIsToggled(function (prev) {
//       return !prev;
//     });
//   }

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">

//       <h1> hola</h1>
//       <img
//         src={isToggled ? "src/images/kirlia.png" : "src/images/Ralts.png"}
//         alt="Toggle"
//         className="w-64 h-64 cursor-pointer rounded shadow-lg transition duration-300 ease-in-out"
//         onClick={handleClick}
//       />
//     </div>
//   );
// }

// Arrow function
    const [isToggled, setIsToggled] = useState(false);
    
        const handleClick = () => setIsToggled(prev => !prev);
    
        return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <img
            src={isToggled ? "src/images/kirlia.png" : "src/images/Ralts.png"}
            alt="Toggle"
            className="w-64 h-64 cursor-pointer rounded shadow-lg transition duration-300 ease-in-out"
            onClick={handleClick}
            />
        </div>
        
        );
    };

export default arrowfunction;