import React from 'react';
import {
  Wallet,
  Calendar,
  Demand,
  Marketing,
  Assets,
  Upgrades,
  DairyProducts,
  DairyFarm,
  BeefProducts,
  BeefFarm,
} from '../tiles';
import './Body.css';

export const Body = () => {
  return (
    <div className="body">
      <div id="column1" className="column">
        <Wallet />
        <Calendar />
        <Demand />
        <Marketing />
      </div>
      <div id="column2" className="column">
        <Assets />
        <Upgrades />
      </div>
      <div id="column3" className="column">
        <DairyProducts />
        <DairyFarm />
      </div>
      <div id="column4" className="column">
        <BeefProducts />
        <BeefFarm />
      </div>
    </div>
  );
};

export default Body;
