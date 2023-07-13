import React from 'react';
import { Container } from '../../../components/Container/Container';
import './Upgrades.css';

type UpgradeOption = {
  name: string;
  description: string;
  cost: number;
  isAvailable: boolean;
  isPurchased: boolean;
  upgrade: () => void;
};

const upgradeOptions: UpgradeOption[] = [
  {
    name: 'Buy Milking Parlor',
    description: 'Enables automatic milking',
    cost: 5000,
    isAvailable: true,
    isPurchased: false,
    upgrade: () => {},
  },
  {
    name: 'Buy New Field',
    description: 'Increases the number of cows that can be kept by 10 cows',
    cost: 0,
    isAvailable: true,
    isPurchased: false,
    upgrade: () => {},
  },
  {
    name: 'Buy Storage Tank',
    description:
      'Increases the amount of milk that can be stored by 500 gallons',
    cost: 0,
    isAvailable: true,
    isPurchased: false,
    upgrade: () => {},
  },
  {
    name: 'Upgrade Dairy Herd to Jersey',
    description: 'Increases milk production to 6.4 gallons per cow per day',
    cost: 0,
    isAvailable: false,
    isPurchased: false,
    upgrade: () => {},
  },
  {
    name: 'Upgrade Dairy Herd to Guernsey',
    description: 'Increases milk production to 6.7 gallons per cow per day',
    cost: 0,
    isAvailable: false,
    isPurchased: false,
    upgrade: () => {},
  },
  {
    name: 'Upgrade Dairy Herd to Ayrshire',
    description: 'Increases milk production to 7.4 gallons per cow per day',
    cost: 0,
    isAvailable: false,
    isPurchased: false,
    upgrade: () => {},
  },
  {
    name: 'Upgrade Dairy Herd to Brown Swiss',
    description: 'Increases milk production to 8.0 gallons per cow per day',
    cost: 0,
    isAvailable: false,
    isPurchased: false,
    upgrade: () => {},
  },
  {
    name: 'Upgrade Dairy Herd to Holstein',
    description: 'Increases milk production to 9.8 gallons per cow per day',
    cost: 0,
    isAvailable: false,
    isPurchased: false,
    upgrade: () => {},
  },
];

export const Upgrades = () => {
  return (
    <Container id="upgrades" title="Upgrades" color="rgb(115, 172, 115)">
      Upgrades
    </Container>
  );
};

export default Upgrades;
