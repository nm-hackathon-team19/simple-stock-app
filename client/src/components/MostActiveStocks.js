import React, { useState, Fragment, useEffect } from 'react';
import axios from 'axios';
import RenderMostActiveStocks from './RenderMostActiveStocks';
import { Spinner } from 'react-bootstrap';

const MostActiveStocks = () => {
  const [mostActiveStocks, setMostActiveStocks] = useState([]);
  const [isSpinner, setSpinner] = useState(true);

  useEffect(() => {
    const getRecommendations = () => {
      axios
        .get('/api/stocks/mostactive')
        .then(res => {
          setMostActiveStocks(res.data);
          setSpinner(false);
        })
        .catch(err => {
          console.log('error most active stocks client side', err);
        });
    };

    getRecommendations();
  }, []);

  return (
    <section className="container-fluid active-stocks-container">
      <div className="most-active-list d-flex flex-wrap justify-content-center">
        {isSpinner ? (
          <Spinner animation="border" className="spinner" />
        ) : (
          mostActiveStocks.map(mostActiveStock => (
            <RenderMostActiveStocks
              mostActiveStock={mostActiveStock}
              key={mostActiveStock.marketCap}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default MostActiveStocks;
