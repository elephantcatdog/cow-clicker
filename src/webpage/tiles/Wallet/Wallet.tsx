import React from 'react';
import { Container } from '../../../components/Container/Container';
import './Wallet.css';

export const Wallet = () => {
  return (
    <Container id="wallet" title="Wallet" color="var(--green)">
      <div>
        Name:
        <span id="name"></span>
      </div>
      <div>
        License Number:
        <span id="user-id"></span>
      </div>
      <div>
        Cash: $<span id="cash"></span>
      </div>
    </Container>
  );
};

export default Wallet;
