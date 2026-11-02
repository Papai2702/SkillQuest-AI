import React from "react";
import { useState } from "react";
const Roadmap = () => {
  const modules = [
    { id: 1, name: "HTML", duration: "3 days" },
    { id: 2, name: "CSS", duration: "5 days" },
    { id: 3, name: "JavaScript", duration: "10 days" },
    { id: 4, name: "React", duration: "7 days" },
  ];
  const [selectedModule, setSelectedModule] = useState("");
  const tagModules = modules.map((module) => {
    return (
      <React.Fragment key={module.id}>
        <button
          className={selectedModule === module.name ? "selected" : ""}
          onClick={() => {
            setSelectedModule(module.name);
          }}
        >
          {module.name}
        </button>
        <p>{module.duration}</p>
      </React.Fragment>
    );
  });
  return (
    <div>
      <h1>Modules:</h1>
      {tagModules}
      {selectedModule && <h2>Selected Module is:{selectedModule}</h2>}
    </div>
  );
};

export default Roadmap;
