import React from 'react';
import {
  BeefProvider,
  DemandProvider,
  MarketingProvider,
  MilkProvider,
  TimeProvider,
} from './providers/';

type ProvidersProps = {
  children?: React.ReactNode;
};

export const Providers = (props: ProvidersProps) => {
  const { children } = props;

  return (
    <MilkProvider>
      <BeefProvider>
        <MarketingProvider>
          <DemandProvider>
            <TimeProvider>{children ?? null}</TimeProvider>
          </DemandProvider>
        </MarketingProvider>
      </BeefProvider>
    </MilkProvider>
  );
};

export default Providers;
