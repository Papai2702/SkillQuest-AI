import React from "react";

const Roadmap = () => {
  const modules = [
    { id: 1, name: "HTML", duration: "3 days" },
    { id: 2, name: "CSS", duration: "5 days" },
    { id: 3, name: "JavaScript", duration: "10 days" },
    { id: 4, name: "React", duration: "7 days" },
  ];
  const tagModules = modules.map((module) => {
    return (
      <React.Fragment key={module.id}>
        <h2>{module.name}</h2>
        <p>{module.duration}</p>
      </React.Fragment>
    );
  });
  return (
    <div>
      <h1>Modules:</h1>
      {tagModules}
    </div>
  );
};

export default Roadmap;
