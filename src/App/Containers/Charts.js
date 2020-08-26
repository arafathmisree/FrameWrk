import React from "react";
import Chart from "../Components/atoms/Charts"
import doughnut from '../Components/atoms/Charts/data/doughnut'
import bar from '../Components/atoms/Charts/data/bar'
import pie from '../Components/atoms/Charts/data/pie'
import line from '../Components/atoms/Charts/data/line'
import { Card } from "../Components/atoms/Card";

function Charts() {

  return (
    <div className="flex  p-8 md:pt-24">
      <Card type="primary" size="small">
        <Chart type="doughnut" data={doughnut}/>
      </Card> 
      
      <Card type="primary" size="small">
          <Chart type="bar" data={bar}/>
      </Card>
      
      <Card type="primary" size="small">
          <Chart type="pie" data={pie}/>
      </Card>
      
      <Card type="primary" size="small">
          <Chart type="line" data={line}/>
      </Card>

    </div>
  );
}

export default Charts;