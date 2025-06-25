import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigateBackButton from "../components/NavigateBackButton";
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
    <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Build Your Spacecraft!
      </h1>

      <form id="submission" onSubmit={handleSubmit}>
        <div>
          <label>Name Your Spacecraft:</label>
          <textarea value={name} onChange={e => setName(e.target.value)} />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <br />
        <div>
          <label>Capacity of Spacecraft:</label>
          <textarea value={capacity} onChange={e => setCapacity(e.target.value)} type="number" />
          {errors.capacity && <p style={{ color: "red" }}>{errors.capacity}</p>}
        </div>
        <br />
        <div>
          <label>Paste the Picture URL :</label>
          <textarea value={pictureUrl} onChange={e => setPictureUrl(e.target.value)} />
        </div>
        <br />
        <div>
          <label>Description of Spacecraft:</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} />
          {errors.description && <p style={{ color: "red" }}>{errors.description}</p>}
        </div>
        <br />
        <button type="submit">Build Spacecraft</button>
      </form>
      <NavigateBackButton />
    </div>
  );
};

export default ConstructionPage;