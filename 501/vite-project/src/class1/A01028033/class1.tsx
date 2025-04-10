// Script with the activities of class 1
import { useState } from "react";
import "/src/A01028033/styles.css";

const Class1 = () => {
  const [isLarge, setIsLarge] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredFood: "",
  });

  const toggleImageSize = () => setIsLarge((prev) => !prev);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { name, phone, preferredFood } = formData;

  return (
    <div id="class1Div">
      <h2>Class 1</h2>

      <img
        src="/src/assets/react.svg"
        alt="Cat!"
        onClick={toggleImageSize}
        style={{
          width: isLarge ? "300px" : "150px",
          height: isLarge ? "300px" : "150px",
          cursor: "pointer",
          transition: "0.3s ease",
        }}
      />
      <h2>Click the image!</h2>

      <form style={{ marginTop: "20px" }}>
        <div className="form-container">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={phone}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="text"
            name="preferredFood"
            placeholder="Preferred Food"
            value={preferredFood}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      </form>

      {name && phone && preferredFood && (
        <p>
          {`Hello, ${name}! Your phone number ${phone} was registered in your order for ${preferredFood}.`}
        </p>
      )}
      <a href="/public/A01028033/menu/milestoneMenu.html">
        <button>Back to menu</button>
      </a>
    </div>
  );
};

export default Class1;
