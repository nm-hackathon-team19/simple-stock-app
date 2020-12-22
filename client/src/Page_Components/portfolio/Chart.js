import React, { useEffect, useRef, useState } from 'react';
import RenderChart from './RenderChart'

const Chart = (props) => {
  const [chartData, setChartData] = useState({})

  useEffect(() => {
    // console.log('useEffect')
    getChartData();
  }, [])
  // console.log(chartData)

  const getChartData = () => {
    // Ajax calls here
    // console.log('getCharData')
    setChartData({
      labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
      datasets: [
        {
          label: 'Population',
          data: [
            617594,
            181045,
            153060,
            106519,
            105162,
            95072
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ]
        }
      ]
    });
  }

  return (
    <div>
      <h1>Chart js component</h1>
      <RenderChart chartData={chartData} />
    </div>
  )
}


export default Chart;
