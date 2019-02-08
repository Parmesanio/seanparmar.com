import React from "react";
import { Pie } from "react-chartjs-2";

const OffSkills = () => {
  return (
    <div>
      <Pie
        data={{
          labels: [
            "Redux",
            "Massive",
            "Express",
            "Swift",
            "Sass",
            "HTML5",
            "CSS3"
          ],
          datasets: [
            {
              data: [50, 50, 50, 50, 50, 50, 50],
              backgroundColor: [
                "#7549ba",
                "#295273",
                "#8bc500",
                "#fe6e31",
                "#cd6799",
                "#ea6227",
                "#27d4a8"
              ]
            }
          ]
        }}
        options={{
          legend: {
            position: "bottom"
          },
          //   cutoutPercentage: 50,
          maintainAspectRatio: false
        }}
      />
    </div>
  );
};

export default OffSkills;
