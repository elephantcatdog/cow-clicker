import React from 'react';
import { Container } from '../../../components/Container/Container';
import './BeefProducts.css';

type BeefProductsProps = {
  isVisible?: boolean;
};

export const BeefProducts = (props: BeefProductsProps) => {
  const { isVisible = true } = props;

  return (
    <Container
      id="beef-products"
      title="Beef Products"
      color="var(--lightRed)"
      isVisible={isVisible}
    >
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
