import React from 'react';
import { Container } from '../../../components/Container/Container';
import './Assets.css';

export const Assets = () => {
  return (
    <Container id="assets" title="Assets" color="var(--gray)">
      <div>
        Net Worth:
        <span id="net-worth"></span>
      </div>
      <div>
        Acreage:
        <span id="acreage"></span>
      </div>
    </Container>
  );
};

export default Assets;
