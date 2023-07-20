import React, { useContext, useEffect } from 'react';
import { Container } from '../../../components/Container/Container';
import { DemandContext, TimeContext } from '../../Providers/providers/';
import './Demand.css';

export const Demand = () => {
  // const [milkPrice, setMilkPrice] = React.useState(1.0);
  const { demandInfo, setDemandInfo } = useContext(DemandContext);
  const { time, setTime } = useContext(TimeContext);

  const checkMilkPriceParameters = (milkPrice: number) => {
    if (milkPrice < demandInfo.minimumMilkPrice) {
      return demandInfo.minimumMilkPrice;
    } else if (milkPrice > demandInfo.maximumMilkPrice) {
      return demandInfo.maximumMilkPrice;
    } else {
      return milkPrice;
    }
  };

  const adjustMilkPrice = () => {
    const milkPrice = demandInfo.milkPrice;
    let newMilkPrice = demandInfo.milkPrice;
    const randomNumber = Math.random();
    const adjustmentNumber = Math.random();

    if (randomNumber < 0.5) {
      return;
    } else if (randomNumber < 0.7) {
      newMilkPrice = checkMilkPriceParameters(milkPrice + adjustmentNumber / 4);
    } else if (randomNumber < 0.9) {
      newMilkPrice = checkMilkPriceParameters(milkPrice - adjustmentNumber / 4);
    } else if (randomNumber < 0.95) {
      newMilkPrice = checkMilkPriceParameters(milkPrice + adjustmentNumber / 2);
    } else {
      newMilkPrice = checkMilkPriceParameters(milkPrice - adjustmentNumber / 2);
    }

    setDemandInfo({ ...demandInfo, milkPrice: newMilkPrice });
  };

  useEffect(() => {
    adjustMilkPrice();
  }, [time]);

  return (
    <Container id="demand" title="Demand" color="var(--gray)">
      Milk Price: ${demandInfo.milkPrice.toFixed(2)} per gallon
    </Container>
  );
};

export default Demand;
