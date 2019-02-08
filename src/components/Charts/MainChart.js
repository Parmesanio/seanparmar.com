import React from "react";
import { Pie } from "react-chartjs-2";

const MainChart = () => {
  return (
    <div>
      <Pie
        height={250}
        data={{
          labels: ["React", "PostgreSQL", "Node.Js"],
          datasets: [
            {
              data: [50, 50, 50],
              backgroundColor: ["#61dafb", "#295273", "#8bc500"]
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

export default MainChart;
