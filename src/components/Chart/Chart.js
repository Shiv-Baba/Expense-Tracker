import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const valueArray = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...valueArray);

  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          value={datapoint.value}
          maxValue={totalMax}
          label={datapoint.label}
          key={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
