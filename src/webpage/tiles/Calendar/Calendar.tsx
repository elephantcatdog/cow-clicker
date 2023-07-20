import React, { useContext } from 'react';
import { Container } from '../../../components/Container/Container';
import { TimeContext } from '../../Providers/providers/';
import './Calendar.css';

export const Calendar = () => {
  const { time, setTime } = useContext(TimeContext);

  return (
    <Container id="calendar" title="Calendar" color="var(--lightBlue)">
      <div>
        Date:{' '}
        {time.toLocaleDateString(undefined, {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </div>
    </Container>
  );
};

export default Calendar;
