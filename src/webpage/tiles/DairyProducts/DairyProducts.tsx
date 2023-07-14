import React from 'react';
import { Container } from '../../../components/Container/Container';
import './DairyProducts.css';

export const DairyProducts = () => {
  return (
    <Container
      id="dairy-products"
      title="Dairy Products"
      color="rgb(115, 172, 115)"
    >
      <div>
        Milk:
        <span id="milk"></span>/<span id="milkStorage"></span> gallons
      </div>
      <div>Butter</div>
      <div>Cheese</div>
      <div>Yogurt</div>
      <div>Ice Cream</div>
    </Container>
  );
};

export default DairyProducts;
