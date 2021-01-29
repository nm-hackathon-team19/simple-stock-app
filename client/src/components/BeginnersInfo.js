import React from 'react';
import { Jumbotron, ListGroup } from 'react-bootstrap';
import { BiRightArrow } from 'react-icons/bi';

const BeginnersInfo = () => {
  return (
    <Jumbotron
      as="section"
      className="guide-rules-container bg-transparent container mb-0 p-3"
    >
      <ListGroup variant="flush">
        <ListGroup.Item>
          <BiRightArrow className="text-success" />{' '}
          <strong>Stock symbol</strong> is an abbreviation used to uniquely
          identify publicly traded shares of a particular stock. For example, FB
          is the symbol of Facebook. To search for stocks, visit our Trading
          page and enter the symbol you wish to search.
        </ListGroup.Item>
        <ListGroup.Item>
          <BiRightArrow className="text-success" />{' '}
          <strong>Percentage change</strong> represents a degree of change over
          time. If the values are{' '}
          <span className="text-danger">negative and red</span>, that means that
          the price decreased. If they are{' '}
          <span className="text-success">positive and green</span> the price
          increased.
        </ListGroup.Item>
        <ListGroup.Item>
          <BiRightArrow className="text-success" />{' '}
          <strong>A stock price</strong> is given for every share issued by a
          publicly traded company. The price is a reflection of the company's
          value – what the public is willing to pay for a piece of the company.
        </ListGroup.Item>
      </ListGroup>
    </Jumbotron>
  );
};

export default BeginnersInfo;
