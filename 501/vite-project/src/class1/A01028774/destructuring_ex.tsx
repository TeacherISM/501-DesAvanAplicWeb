import React, { useState } from "react";
import InputField from "../../class2/A01028774/inputFile";

function destructuring() {


// Sin desestructuring
//   const [form, setForm] = useState({
//     nombre: "",
//     primerApellido: "",
//     segundoApellido: "",
//   });

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const eventTarget = event.target;
//     const inputName = eventTarget.name;
//     const inputValue = eventTarget.value;

//     setForm((prevForm) => {
//       return {
//         ...prevForm,
//         [inputName]: inputValue,
//       };
//     });
//   };

//   const handleSubmit = function (e: React.FormEvent) {
//     e.preventDefault();
//     alert(
//       "Tu nombre es: " +
//         form.nombre +
//         " " +
//         form.primerApellido +
//         " " +
//         form.segundoApellido
//     );
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form onSubmit={handleSubmit} className="p-6 bg-white shadow-lg rounded">
//         <InputField
//           type="text"
//           name="nombre"
//           value={form.nombre}
//           onChange={handleChange}
//           placeholder="Escribe tu nombre"
//         />
//         <InputField
//           type="text"
//           name="primerApellido"
//           value={form.primerApellido}
//           onChange={handleChange}
//           placeholder="Escribe tu primer apellido"
//         />
//         <InputField
//           type="text"
//           name="segundoApellido"
//           value={form.segundoApellido}
//           onChange={handleChange}
//           placeholder="Escribe tu segundo apellido"
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none"
//         >
//           Enviar
//         </button>
//       </form>
//     </div>
//   );
// };

// Con desestructuring
const [form, setForm] = useState({
    nombre: "",
    primerApellido: "",
    segundoApellido: "",
  });

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nombre, primerApellido, segundoApellido } = form;
    alert(`Tu nombre es: ${nombre} ${primerApellido} ${segundoApellido}`);
  };

  const { nombre, primerApellido, segundoApellido } = form;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-lg rounded">
        
        <div>
          <label htmlFor="nombre" className="block text-gray-700">
            Nombre:    
          </label>
          <InputField
            type="text"
            name="nombre"
            value={nombre}
            onChange={handleChange}
            placeholder="Escribe tu nombre"
          />
        </div>
        <div>
          <label htmlFor="primerApellido" className="block text-gray-700">
            Primer Apellido:
          </label>
          <InputField
          type="text"
          name="primerApellido"
          value={primerApellido}
          onChange={handleChange}
          placeholder="Escribe tu primer apellido"
          />
        </div>
        <div>
          <label htmlFor="segundoApellido" className="block text-gray-700">
            Segundo Apellido:
          </label>
          <InputField
            type="text"
            name="segundoApellido"
            value={segundoApellido}
            onChange={handleChange}
            placeholder="Escribe tu segundo apellido"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};


export default destructuring;