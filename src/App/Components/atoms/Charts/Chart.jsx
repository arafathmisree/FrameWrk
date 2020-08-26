import React from "react";
 
import DoughnutChart from "./Doughnut"
import PieChart from "./Pie"
import BarChart from "./Bar"
import LineChart from "./Line"

export default function Chart({ type, data, width, height, options }){
  console.log(type);
  if(type){
    switch (type) {
      case "doughnut":
        return <DoughnutChart data={data} width={width}  height={height} options={options}/>
      case "pie":
        return <PieChart data={data} width={width}  height={height} options={options}/>
      case "bar":
        return <BarChart data={ data } width={width}  height={height} options={options}/>
      case "line":
        return <LineChart data={ data } width={width}  height={height} options={options}/>
    }
  }
  return <p>Chart return null</p>
}