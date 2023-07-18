import React from 'react';
import { Container } from '../../../components/Container/Container';
import './Watch.css';

export const Watch = () => {
  return (
    <Container id="watch" title="Watch" color="var(--lightBlue)">
      <div>Time: 4:00{}</div>
      <div>Date: January 7, 2023{}</div>
    </Container>
  );
};

export default Watch;
