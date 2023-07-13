import React from 'react';
import { Wallet } from '../tiles/Wallet/Wallet';
import { Demand } from '../tiles/Demand/Demand';
import './Body.css';

export const Body = () => {
  return (
    <div className="body">
      <div id="column1" className="column">
        <Wallet />
        <Demand />
      </div>
      <div id="column2" className="column"></div>
      <div id="column3" className="column"></div>
      <div id="column4" className="column"></div>
    </div>
  );
};

export default Body;
