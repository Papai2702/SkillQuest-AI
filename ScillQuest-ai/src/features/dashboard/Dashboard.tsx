import { useState } from "react";
import XPCard from "../../components/XPCard";
import ProgressBar from "../../components/ProgressBar";
import WelcomeCard from "../../components/WelcomeCard";
import Button from "../../components/Button";
import Roadmap from "../../components/Roadmap";

function Dashboard() {
  const totalXP = 500;

  const [xp, setXP] = useState(200);

  const currentLevelXP = xp % 500;
  const level = Math.floor(xp / 500 + 1);
  const levelProgress = (currentLevelXP / 500) * 100;

  const [isModuleStarting, setisModuleStarting] = useState(false);

  function startModule() {
    setisModuleStarting(true);
  }

  //   const skills = ["React", "Node.js", "MongoDB", "Express"];
  //   const skilledMessage = skills.map((skill) => {
  //     return `I am Learning ${skill}`;
  //   });

  //   console.log(skilledMessage);
  return (
    <>
      <WelcomeCard name="Premanshu" message="Code! Debug! Run..." />
      <XPCard
        xp={xp}
        onEarnXP={() => {
          setXP((previousXP) => previousXP + 50);
        }}
      />{" "}
      <ProgressBar xp={currentLevelXP} totalXP={totalXP} />
      <h2>Current Level : {level}</h2>
      <h2>Current Level XP : {currentLevelXP}</h2>
      <h2>Level Progress : {levelProgress.toFixed(0)}%</h2>
      <Button label="Show Module" onClick={startModule} />
      {isModuleStarting && <h1>Modules are Listing...........</h1>}
      {isModuleStarting && <Roadmap />}
    </>
  );
}

export default Dashboard;
