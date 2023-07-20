import React, { createContext, useState } from 'react';

type DemandInfo = {
  milkPrice: number;
  minimumMilkPrice: number;
  maximumMilkPrice: number;
  beefPrice: number;
};

export type DemandContextType = {
  demandInfo: DemandInfo;
  setDemandInfo: (demandInfo: DemandInfo) => void;
};

export const DemandContext = createContext<DemandContextType>(null);

type DemandProviderProps = {
  children?: React.ReactNode;
};

export const DemandProvider = (props: DemandProviderProps) => {
  const { children } = props;

  // initial values
  const [demandInfo, setDemandInfo] = useState<DemandInfo>({
    milkPrice: 1.0,
    minimumMilkPrice: 1.0,
    maximumMilkPrice: 5.0,
    beefPrice: 1.0,
  });

  return (
    <DemandContext.Provider value={{ demandInfo, setDemandInfo }}>
      {children ?? null}
    </DemandContext.Provider>
  );
};

export default DemandProvider;
