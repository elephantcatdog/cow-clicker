import React from 'react';
import { Container } from '../../../components/Container/Container';
import './BeefProducts.css';

export const BeefProducts = () => {
  return (
    <Container id="beef-products" title="Beef Products" color="var(--lightRed)">
      <div>
        Beef:
        <span id="beef"></span>/<span id="beefStorage"></span> pounds
      </div>
      <div>Hamburger</div>
      <div>Steak</div>
      <div>Leather</div>
    </Container>
  );
};

export default BeefProducts;
