import React from 'react';
import { MilkProvider } from './providers/';

type ProvidersProps = {
  children?: React.ReactNode;
};

export const Providers = (props: ProvidersProps) => {
  const { children } = props;

  return <MilkProvider>{children ?? null}</MilkProvider>;
};

export default Providers;
