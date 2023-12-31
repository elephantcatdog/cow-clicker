import React from 'react';
import { Container } from '../../../components/Container/Container';
import './BeefFarm.css';

type BeefFarmProps = {
  isVisible?: boolean;
};

export const BeefFarm = (props: BeefFarmProps) => {
  const { isVisible = true } = props;

  return (
    <Container
      id="beef-farm"
      title="Beef Farm"
      color="var(--red)"
      isVisible={isVisible}
    >
      Beef Farm
    </Container>
  );
};

export default BeefFarm;
