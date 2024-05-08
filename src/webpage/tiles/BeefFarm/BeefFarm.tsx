import React, { useContext } from 'react';
import { Container, Button } from '../../../components';
import { BeefContext } from '../../Providers/providers/';
import './BeefFarm.css';

export type BeefBreed = {
  Breed: string;
  BeefPounds: number;
  Cost: number;
};

export const beefBreeds: BeefBreed[] = [
  { Breed: 'A', BeefPounds: 200, Cost: 1000 },
  { Breed: 'B', BeefPounds: 300, Cost: 1200 },
  { Breed: 'C', BeefPounds: 400, Cost: 1500 },
  { Breed: 'D', BeefPounds: 500, Cost: 1900 },
  { Breed: 'E', BeefPounds: 600, Cost: 2400 },
  { Breed: 'F', BeefPounds: 700, Cost: 3000 },
];

type BeefFarmProps = {
  currentBreed?: BeefBreed;
  isVisible?: boolean;
};

export const BeefFarm = (props: BeefFarmProps) => {
  const { currentBreed = beefBreeds[0], isVisible = true } = props;

  const { beefInfo, setBeefInfo } = useContext(BeefContext);

  const butcherCow = () => {
    const newBeefAmountPounds =
      beefInfo.beefAmountPounds + currentBreed.BeefPounds;
    if (newBeefAmountPounds > beefInfo.beefStoragePounds) {
      setBeefInfo({
        ...beefInfo,
        beefAmountPounds: beefInfo.beefStoragePounds,
      });
    } else {
      setBeefInfo({ ...beefInfo, beefAmountPounds: newBeefAmountPounds });
    }
  };

  return (
    <Container
      id="beef-farm"
      title="Beef Farm"
      color="var(--red)"
      isVisible={isVisible}
    >
      <div className="content">
        <div className="info">
          <div>
            Herd:
            {}/{} cows
          </div>
          <div>Breed: {currentBreed.Breed}</div>
          <div>Price: ${currentBreed.Cost}</div>
          <div>Beef Given: {currentBreed.BeefPounds}</div>
        </div>
        <div className="buttonContainer">
          <Button className="primary" onClick={butcherCow}>
            Butcher
          </Button>
          <Button>Buy Beef Cow</Button>
          <Button className="disabled">Upgrade Beef Cow Herd</Button>
        </div>
      </div>
    </Container>
  );
};

export default BeefFarm;
