/** @jsxImportSource react */
import { useState } from "react";
import InputField from "./components/InputField";
import Button from "./components/Button";

export default function TravelRequestForm() {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [purpose, setPurpose] = useState("");

  const handleSubmit = () => {
    console.log("Travel Request:", { destination, startDate, endDate, purpose });
    alert("Travel request submitted");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Travel Request Form</h1>
      <InputField
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <InputField
        type="date"
        placeholder="Start Date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <InputField
        type="date"
        placeholder="End Date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <textarea
        placeholder="Purpose"
        value={purpose}
        onChange={(e) => setPurpose(e.target.value)}
        className="p-2 border rounded w-full mb-4"
      />
      <Button label="Submit" onClick={handleSubmit} />
    </div>
  );
}
