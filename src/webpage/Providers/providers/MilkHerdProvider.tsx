import React, { createContext, useState } from 'react';
import { DairyBreed, dairyBreeds } from '../../tiles/DairyFarm/DairyFarm';

type MilkHerdInfo = {
  breed: DairyBreed;
  numberOfCows: number;
  numberOfFields: number;
};

export type MilkHerdContextType = {
  milkHerdInfo: MilkHerdInfo;
  setMilkHerdInfo: (milkHerdInfo: MilkHerdInfo) => void;
};

export const MilkHerdContext = createContext<MilkHerdContextType>(null);

type MilkHerdProviderProps = {
  children?: React.ReactNode;
};

export const MilkHerdProvider = (props: MilkHerdProviderProps) => {
  const { children } = props;

  // initial values
  const [milkHerdInfo, setMilkHerdInfo] = useState<MilkHerdInfo>({
    breed: dairyBreeds[0],
    numberOfCows: 1,
    numberOfFields: 1,
  });

  return (
    <MilkHerdContext.Provider value={{ milkHerdInfo, setMilkHerdInfo }}>
      {children ?? null}
    </MilkHerdContext.Provider>
  );
};

export default MilkHerdProvider;
