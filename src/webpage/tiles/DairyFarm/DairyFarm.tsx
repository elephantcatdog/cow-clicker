import React, { useContext } from 'react';
import { Container, Button } from '../../../components';
import { MilkContext } from '../../Providers/providers/';
import './DairyFarm.css';

export type DairyBreed = {
  Breed: string;
  MilkGallonsPerDay: number;
  Cost: number;
};

export const dairyBreeds: DairyBreed[] = [
  { Breed: 'Milking Shorthorn', MilkGallonsPerDay: 6.2, Cost: 1000 },
  { Breed: 'Jersey', MilkGallonsPerDay: 6.4, Cost: 1200 },
  { Breed: 'Guernsey', MilkGallonsPerDay: 6.8, Cost: 1500 },
  { Breed: 'Ayrshire', MilkGallonsPerDay: 7.4, Cost: 1900 },
  { Breed: 'Brown Swiss', MilkGallonsPerDay: 8.2, Cost: 2400 },
  { Breed: 'Holstein', MilkGallonsPerDay: 9.4, Cost: 3000 },
];

type DairyFarmProps = {
  currentBreed?: DairyBreed;
  isVisible?: boolean;
};

export const DairyFarm = (props: DairyFarmProps) => {
  const { currentBreed = dairyBreeds[0], isVisible = true } = props;

  const { milkInfo, setMilkInfo } = useContext(MilkContext);

  const milkCow = () => {
    const newMilkAmountGallons = milkInfo.milkAmountGallons + 1;
    if (newMilkAmountGallons > milkInfo.milkStorageGallons) {
      setMilkInfo({
        milkAmountGallons: milkInfo.milkStorageGallons,
        milkStorageGallons: milkInfo.milkStorageGallons,
      });
    } else {
      setMilkInfo({
        milkAmountGallons: newMilkAmountGallons,
        milkStorageGallons: milkInfo.milkStorageGallons,
      });
    }
  };

  return (
    <Container
      id="dairy-farm"
      title="Dairy Farm"
      height={250}
      color="var(--green)"
      isVisible={isVisible}
    >
      <div className="content">
        <div className="info">
          <div>
            Herd:
            <span id="dairyNumber"></span>/<span id="fieldSpace"></span> cows
          </div>
          <div>
            Breed: {currentBreed.Breed}
            {/* <span id="dairyBreed"></span> */}
          </div>
          <div>
            Price: ${currentBreed.Cost}
            {/* <span id="dairyPrice"></span> */}
          </div>
          <div>
            Milk Given: {currentBreed.MilkGallonsPerDay}
            {/* <span id="dairyRate"></span> */}
          </div>
        </div>
        <div className="buttonContainer">
          <Button id="milk-dairy-cow" className="primary" onClick={milkCow}>
            Milk
          </Button>
          <Button id="buy-dairy-cow">Buy Dairy Cow</Button>
          <Button id="buy-dairy-cow" className="disabled">
            Upgrade Dairy Cow
          </Button>
        </div>
      </div>

      {/* <div className="button buttonTwo" onClick={buyDairy()}>
        Buy Dairy Cow
      </div>
      <div className="button buttonOne" onClick={milkCows()}>
        Milk
      </div> */}
    </Container>
  );
};

export default DairyFarm;
