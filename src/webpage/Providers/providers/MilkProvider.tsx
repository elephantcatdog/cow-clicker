import React, { createContext, useState } from 'react';

export type MilkInfo = {
  milkAmountGallons: number;
  milkStorageGallons: number;
};

export type MilkContextType = {
  milkInfo: MilkInfo;
  setMilkInfo: (milkInfo: MilkInfo) => void;
};

export const MilkContext = createContext<MilkContextType>(null);

type MilkProviderProps = {
  children?: React.ReactNode;
};

export const MilkProvider = (props: MilkProviderProps) => {
  const { children } = props;

  // initial values
  const [milkInfo, setMilkInfo] = useState<MilkInfo>({
    milkAmountGallons: 0,
    milkStorageGallons: 500,
  });

  return (
    <MilkContext.Provider value={{ milkInfo, setMilkInfo }}>
      {children ?? null}
    </MilkContext.Provider>
  );
};

export default MilkProvider;
