import React from 'react';
import { Container } from '../../../components/Container/Container';
import './Wallet.css';

export const Wallet = () => {
  return (
    <Container id="wallet" title="Wallet" color="rgb(115, 172, 115)">
      <div>
        Name:
        <span id="name"></span>
      </div>
      <div>
        License Number:
        <span id="user-id"></span>
      </div>
      <div>
        Money: $<span id="money"></span>
      </div>
    </Container>
  );
};

export default Wallet;
