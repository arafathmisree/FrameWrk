import React from "react";
import Chart from "react-apexcharts"

function ChartApex({data, width, height, type }) {
    return (
        <Chart options={data.options} series={data.series} type={type} />
    )
}
export default ChartApex;