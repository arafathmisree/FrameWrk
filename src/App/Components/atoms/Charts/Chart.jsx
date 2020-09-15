import React from "react";
 
import { 
  DoughnutChart,
  PieChart, 
  BarChart, 
  LineChart } from "./types"

export default function Chart({ type, data, width, height, options }){
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