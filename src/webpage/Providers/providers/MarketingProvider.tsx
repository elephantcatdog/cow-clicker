import React, { createContext, useState } from 'react';

type MarketingInfo = {
  marketingDesireMilk: number;
  marketingDesireBeef: number;
};

export type MarketingContextType = {
  marketingInfo: MarketingInfo;
  setMarketingInfo: (marketingInfo: MarketingInfo) => void;
};

export const MarketingContext = createContext<MarketingContextType>(null);

type MarketingProviderProps = {
  children?: React.ReactNode;
};

export const MarketingProvider = (props: MarketingProviderProps) => {
  const { children } = props;

  // initial values
  const [marketingInfo, setMarketingInfo] = useState<MarketingInfo>({
    marketingDesireMilk: 1.0,
    marketingDesireBeef: 1.0,
  });

  return (
    <MarketingContext.Provider value={{ marketingInfo, setMarketingInfo }}>
      {children ?? null}
    </MarketingContext.Provider>
  );
};

export default MarketingProvider;
