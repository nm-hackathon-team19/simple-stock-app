import React, { useState, useEffect } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { getHoldings } from '../../dbFunctions';
import RenderChart from './RenderChart'

const Chart = () => {
  const [chartData, setChartData] = useState({})
  const [holdings, setHoldings] = useState([]);
  const [holdingNames, setHoldingNames] = useState([]);
  const [holdingShares, setHoldingShares] = useState([]);


  useEffect(() => {
    getHoldings().then(holdingsData => setHoldings(holdingsData));
  }, []);

  useEffect(() => {
    for (let i = 0; holdings.length > i; i++) {
      setHoldingNames(prevState => [...prevState, holdings[i].name]);
      setHoldingShares(prevState => [...prevState, holdings[i].shares]);
    }
  }, [holdings])

  console.log(holdings)

  useEffect(() => {
    setChartData({
      labels: holdingNames,
      datasets: [
        {
          label: 'Population',
          data: holdingShares,
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
  }, [holdingNames])

  return (
    <div className="chart">
      {holdingNames.length > 0 ?
        <Bar
          data={holdingNames.length > 0 ? chartData : null}
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
        : <h1>Update</h1>}
    </div>
  )
}

export default Chart;
