import React, { useContext } from 'react';
import { Container } from '../../../components/Container/Container';
import { MilkContext } from '../../Providers/providers/';
import './DairyProducts.css';

export const DairyProducts = () => {
  const { milkInfo, setMilkInfo } = useContext(MilkContext);

  return (
    <Container
      id="dairy-products"
      title="Dairy Products"
      color="var(--lightGreen)"
    >
      <div>
        Milk: {milkInfo.milkAmountGallons}/{milkInfo.milkStorageGallons} gallons
      </div>
      <div>Butter: </div>
      <div>Cheese: </div>
      <div>Yogurt: </div>
      <div>Ice Cream: </div>
    </Container>
  );
};

export default DairyProducts;
