import React from 'react';
import { Container } from '../../../components/Container/Container';
import './Demand.css';

export const Demand = () => {
  const [milkPrice, setMilkPrice] = React.useState(1.0);

  const checkMilkPriceParameters = (milkPrice: number) => {
    const minimumMilkPrice = 1.0;
    const maximumMilkPrice = 5.0;

    if (milkPrice < minimumMilkPrice) {
      return minimumMilkPrice;
    } else if (milkPrice > maximumMilkPrice) {
      return maximumMilkPrice;
    } else {
      return milkPrice;
    }
  };

  const adjustMilkPrice = () => {
    const randomNumber = Math.random();
    const adjustmentNumber = Math.random();

    if (randomNumber < 0.5) {
      return;
    } else if (randomNumber < 0.7) {
      setMilkPrice(checkMilkPriceParameters(milkPrice + adjustmentNumber / 2));
    } else if (randomNumber < 0.9) {
      setMilkPrice(checkMilkPriceParameters(milkPrice - adjustmentNumber / 2));
    } else if (randomNumber < 0.95) {
      setMilkPrice(checkMilkPriceParameters(milkPrice + adjustmentNumber));
    } else {
      setMilkPrice(checkMilkPriceParameters(milkPrice - adjustmentNumber));
    }
  };

  return (
    <Container id="demand" title="Demand" color="var(--gray)">
      Milk Price: ${milkPrice.toFixed(2)}
    </Container>
  );
};

export default Demand;
