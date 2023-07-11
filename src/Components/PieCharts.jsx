import React, { useEffect, useState } from 'react'
import {Pie} from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto";

const PieCharts = ({reqData}) => {
  return (
    <Pie data={reqData} />
  )
}

export default PieCharts;