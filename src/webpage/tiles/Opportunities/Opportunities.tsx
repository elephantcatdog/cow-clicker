import React from 'react';
import { Container } from '../../../components/Container/Container';
import './Opportunities.css';

type OpportunitiesProps = {
  isVisible?: boolean;
};

export const Opportunities = (props: OpportunitiesProps) => {
  const { isVisible = true } = props;

  return (
    <Container
      id="opportunities"
      title="Opportunities"
      color="var(--lightGray)"
      isVisible={isVisible}
    >
      Opportunities
    </Container>
  );
};

export default Opportunities;
