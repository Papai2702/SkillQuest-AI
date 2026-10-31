import React from "react";
import { useState } from "react";

type ProgressBarProps = {
xp:any;
totalXP:any;
};

const ProgressBar = ({ xp, totalXP }: ProgressBarProps) => {
  let percentage = Math.min((xp / totalXP) * 100, 100);

  return (
    <div>
      <h2>current level Progress : {percentage}%</h2>
      <div
        style={{
          width: "300px",
          height: "20px",
          backgroundColor: "#ddd",
          borderRadius: 12,
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: "100%",
            backgroundColor: "green",
            borderRadius: 12,
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
