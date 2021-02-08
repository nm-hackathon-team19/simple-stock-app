import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const NoCurrentHoldings = () => {
  return (
    <Card className="text-center mt-5">
      <Card.Body className="d-block border">
        <Card.Title>You don't own any holdings as of yet.</Card.Title>
        <Card.Text>
          Go to our Trade page to start purchasing new stocks.{' '}
        </Card.Text>
        <Link to="/main">
          <Button variant="primary">Trade Page</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default NoCurrentHoldings;
