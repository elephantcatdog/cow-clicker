import React from 'react';
import {
  TimeProvider,
  MilkProvider,
  MarketingProvider,
  DemandProvider,
} from './providers/';

type ProvidersProps = {
  children?: React.ReactNode;
};

export const Providers = (props: ProvidersProps) => {
  const { children } = props;

  return (
    <MilkProvider>
      <MarketingProvider>
        <DemandProvider>
          <TimeProvider>{children ?? null}</TimeProvider>
        </DemandProvider>
      </MarketingProvider>
    </MilkProvider>
  );
};

export default Providers;
