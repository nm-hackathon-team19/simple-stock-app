import React, { useState, useEffect } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { getHoldings } from '../../dbFunctions';
import RenderChart from './RenderChart'

const Chart = (props) => {
  const [chartData, setChartData] = useState({})
  const [isShow, setIsShow] = useState(false)
  const [holdings, setHoldings] = useState([]);
  const [holdingNames, setHoldingNames] = useState([]);


  useEffect(() => {
    getHoldings().then(holdingsData => setHoldings(holdingsData));
    console.log('AMITAY')
  }, []);

  // console.log(holdings)

  useEffect(() => {
    console.log('useEffect')
    console.log(holdings);
    // debugger
    for (let i = 0; holdings.length > i; i++) {
      // debugger
      console.log(holdings[i].name);
      setHoldingNames(prevState => [...prevState, holdings[i].name]);
    }
  }, [holdings])

  if (holdingNames.length > 0) {
    getChartData();
  }

  console.log(holdingNames);
  // console.log(props.holdings);

  console.log(holdingNames.length)
  useEffect(() => {
    // console.log(chartData);
    // console.log(isShow);
    setIsShow(true)
  }, [isShow])
  // console.log(isShow)

  const getHoldingNames = () => {
    let holdingNames = []
    // debugger
    for (let i = 0; props.holdings.length > 0; i++) {
      // debugger
      console.log(props.holdings[i].name);
    }
    // return 
  }

  if (holdingNames.length > 0) {


    const getChartData = () => {
      // Ajax calls here
      console.log('getCharData', holdingNames)
      setChartData({
        labels: holdingNames,
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
  }

  if (isShow) {
    return (
      <div className="chart">
        <Bar
          data={holdingNames.length > 0 ? chartData : {}}
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


export default Chart;
