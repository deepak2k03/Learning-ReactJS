import { useState } from "react";

function CheckBoxes() {
  const [skills, setSkills] = useState([]);

  const handleSkills = (event) => {
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((item) => item !== event.target.value));
    }
  };

  return (
    <>
      <h3>Select your skills</h3>
      <input type="checkbox" onChange={handleSkills} id="php" value="PHP" />
      <label htmlFor="php">PHP</label>
      <br />

      <input type="checkbox" onChange={handleSkills} id="js" value="JS" />
      <label htmlFor="js">JS</label>
      <br />

      <input type="checkbox" onChange={handleSkills} id="node" value="Node" />
      <label htmlFor="node">Node</label>
      <br />

      <h1>{skills.toString()}</h1>
    </>
  );
}

export default CheckBoxes;
