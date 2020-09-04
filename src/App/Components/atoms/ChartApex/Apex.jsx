import React from "react";

import { ChartApex } from "./types"

export default function Apex({ type, data, width, height, options }){
  if (type) {
    switch(type) {
      case "pie":
        return <ChartApex  data={data}  type="pie" />
      case "bar":
        return <ChartApex  data={data} type="bar" />
      case "doughnut":
        return <ChartApex  data={data} type="donut" />
      case "line":
        return <ChartApex  data={data} type="line" />
    }
  }
  return <p>Chart return null</p>
}