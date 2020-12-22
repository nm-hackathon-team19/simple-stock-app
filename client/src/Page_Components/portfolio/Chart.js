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

  // const getNames = () => {
  //   for (let i = 0; holdings.length > i; i++) {
  //     // debugger
  //     // console.log(holdings[i].name);
  //     setHoldingNames(prevState => [...prevState, holdings[i].name]);
  //   }
  //   return holdingNames
  // }


  useEffect(() => {
    for (let i = 0; holdings.length > i; i++) {
      // debugger
      // console.log(holdings[i].name);
      setHoldingNames(prevState => [...prevState, holdings[i].name]);
    }

  }, [holdings])

  console.log(holdingNames)

  useEffect(() => {
    // if (holdingNames.length > 0) {
    console.log(holdingNames)

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
  }, [holdingNames])


  return (
    <div className="chart">
      {holdingNames.length > 0 ?
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
        : <h1>Update</h1>}
    </div>
  )


}


export default Chart;
