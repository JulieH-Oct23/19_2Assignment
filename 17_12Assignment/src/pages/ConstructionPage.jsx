import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { buildSpacecraft } from "../services/SpaceTravelApi";

const ConstructionPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [description, setDescription] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!capacity || isNaN(capacity) || capacity <= 0) errs.capacity = "Capacity must be a positive number";
    if (!description.trim()) errs.description = "Description is required";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const response = await buildSpacecraft({
      name,
      capacity: Number(capacity),
      description,
      pictureUrl: pictureUrl ? [pictureUrl] : undefined,
    });

    if (response.isError) {
      alert(`Error creating spacecraft: ${response.data}`);
    } else {
      alert("Spacecraft built successfully!");
      navigate("/spacecrafts");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input value={name} onChange={e => setName(e.target.value)} />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>
      <div>
        <label>Capacity</label>
        <input value={capacity} onChange={e => setCapacity(e.target.value)} type="number" />
        {errors.capacity && <p style={{ color: "red" }}>{errors.capacity}</p>}
      </div>
      <div>
        <label>Description</label>
        <textarea value={description} onChange={e => setDescription(e.target.value)} />
        {errors.description && <p style={{ color: "red" }}>{errors.description}</p>}
      </div>
      <div>
        <label>Picture URL (optional)</label>
        <input value={pictureUrl} onChange={e => setPictureUrl(e.target.value)} />
      </div>
      <button type="submit">Build Spacecraft</button>
    </form>
  );
};

export default ConstructionPage;