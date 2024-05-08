import React, { createContext, useState } from 'react';

type BeefInfo = {
  beefAmountPounds: number;
  beefStoragePounds: number;
};

export type BeefContextType = {
  beefInfo: BeefInfo;
  setBeefInfo: (beefInfo: BeefInfo) => void;
};

export const BeefContext = createContext<BeefContextType>(null);

type BeefProviderProps = {
  children?: React.ReactNode;
};

export const BeefProvider = (props: BeefProviderProps) => {
  const { children } = props;

  // initial values
  const [beefInfo, setBeefInfo] = useState<BeefInfo>({
    beefAmountPounds: 0,
    beefStoragePounds: 500,
  });

  return (
    <BeefContext.Provider value={{ beefInfo, setBeefInfo }}>
      {children ?? null}
    </BeefContext.Provider>
  );
};

export default BeefProvider;
