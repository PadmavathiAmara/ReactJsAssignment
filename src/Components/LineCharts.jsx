import React from 'react'
import {Line} from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto";
import './Dashboard.css';

const LineCharts = ({reqData, options}) => {
  return (
    <Line data={reqData} options={options} />
  )
}

export default LineCharts;