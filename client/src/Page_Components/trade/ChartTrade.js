import React, { useState, useEffect } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { getHoldings } from '../../dbFunctions';
import axios from 'axios'

const ChartTrade = ({ symbol }) => {
  const [chartData, setChartData] = useState({})
  const [holdings, setHoldings] = useState([]);
  const [holdingDays, setHoldingDays] = useState([]);
  const [holdingPrices, setHoldingPrices] = useState([]);

  useEffect(() => {
    getHoldings().then(holdings => setHoldings(holdings));
  }, []);

  useEffect(() => {
    getHoldingPricesByDates(symbol);
  }, [])

  const getHoldingPricesByDates = async (symbol) => {
    try {
      const response = await axios.get(`api/chart/search/?symbol=${symbol}`);
      setDatesAndPricesStates(response.data)
    } catch (err) {
      console.error('error in getHoldingPricesByDates', err.message);
    }
  }

  const setDatesAndPricesStates = (data) => {
    for (let i = 0; data.length > i; i++) {
      setHoldingDays(prevState => [...prevState, data[i].label]);
      setHoldingPrices(prevState => [...prevState, data[i].close]);
    }
  }

  useEffect(() => {
    if (holdingDays.length > 0) {
      console.log('inside useEffect', holdingDays)
      console.log('inside useEffect', holdingPrices)
      setChartData({
        labels: holdingDays,
        datasets: [
          {
            label: symbol,
            data: holdingPrices,
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
  }, [holdingPrices]);

  return (
    <div className="chart">
      {holdingDays.length > 0 &&
        <Line
          data={holdingDays.length > 0 ? chartData : null}
          options={{
            title: {
              display: true,
              text: `Highest price for each last 10 business days`,
              fontSize: 25
            },
            legend: {
              display: true,
              position: 'right'
            },
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Price',
                  fontSize: 15,
                  fontStyle: 'italic'
                }
              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Date',
                  fontSize: 15,
                  fontStyle: 'italic'
                }
              }]
            }

          }}
        />
      }
    </div>
  )
};

export default ChartTrade;
