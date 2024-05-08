import React from 'react';
import { Container } from '../../../components/Container/Container';
import './Marketing.css';

type MarketingProps = {
  isVisible?: boolean;
};

export const Marketing = (props: MarketingProps) => {
  const { isVisible = true } = props;

  return (
    <Container
      id="marketing"
      title="Marketing"
      color="var(--lightGray)"
      isVisible={isVisible}
    >
      Marketing
    </Container>
  );
};

export default Marketing;
