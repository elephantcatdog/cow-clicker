import React, { createContext, useState, useEffect } from 'react';

export type TimeContextType = {
  time: Date;
  setTime: (time: Date) => void;
};

export const TimeContext = createContext<TimeContextType>(null);

type TimeProviderProps = {
  children?: React.ReactNode;
};

export const TimeProvider = (props: TimeProviderProps) => {
  const { children } = props;

  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    setTimeout(() => {
      // update the time by one hour
      const newTime = new Date(time);
      newTime.setHours(newTime.getHours() + 1);
      setTime(newTime);
    }, 1000); // every second
  }, [time]);

  return (
    <TimeContext.Provider value={{ time, setTime }}>
      {children ?? null}
    </TimeContext.Provider>
  );
};

export default TimeProvider;
