import { useState } from "react";
import XPCard from "./components/XPCard";
import ProgressBar from "./components/ProgressBar";
import WelcomeCard from "./components/WelcomeCard";

function App() {
  const [totalXP, settotalXP] = useState(500);

  const [xp, setXP] = useState(200);

  const currentLevel = xp % 500;
  const levelProgress = Math.floor(xp / 500 + 1);
  return (
    <>
      <WelcomeCard name="Premanshu" message="Code! Debug! Run..."/>
      <XPCard
        xp={xp}
        onEarnXP={() => {
          setXP((previousXP) => previousXP + 50);
        }}
      />{" "}
      <ProgressBar xp={currentLevel} totalXP={totalXP} />
      <h2>Current Level XP : {currentLevel}</h2>
      <h2>Level Progress : {levelProgress}</h2>
    </>
  );
}

export default App;
