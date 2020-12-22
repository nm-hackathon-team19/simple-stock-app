import React, { useState, useEffect } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

const RenderChart = ({ chartData }) => {
  const [isShow, setIsShow] = useState(false)

  //   static defaultProps = {
  // displayTitle: true,
  // displayLegend: true,
  // legendPosition: 'right',
  // location: 'City'
  //   }
  useEffect(() => {
    console.log(chartData);
    console.log(isShow);
    setIsShow(true)
  }, [isShow])
  console.log(isShow)

  // console.log(chartData);
  if (isShow) {
    return (
      <div className="chart">
        <Bar
          data={chartData}
          options={{
            title: {
              display: true,
              text: 'Largest Cities In ' + 'city',
              fontSize: 25
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
      </div>
    )
  } else {
    return (
      <div>
        <h1>loser</h1>
      </div>
    )
  }
}

export default RenderChart