import React from 'react';
import { Container, Button } from '../../../components';
import './DairyFarm.css';

export const DairyFarm = () => {
  return (
    <Container id="dairy-farm" title="Dairy Farm" color="var(--green)">
      <div>
        Herd:
        <span id="dairyNumber"></span>/<span id="fieldSpace"></span> cows
      </div>
      <div>
        Breed:
        <span id="dairyBreed"></span>
      </div>
      <div>
        Price: $<span id="dairyPrice"></span>
      </div>
      <div>
        Milk Given:
        <span id="dairyRate"></span>
      </div>
      <Button id="milk-dairy-cow" className="primary buttonOne">
        Milk
      </Button>
      <Button id="buy-dairy-cow" className="buttonTwo">
        Buy Dairy Cow
      </Button>
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
