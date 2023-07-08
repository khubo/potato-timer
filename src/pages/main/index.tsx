import { useState } from 'react';
import Time from './time';
import Control from './control';

export const timerTypes = ['predefined', 'free-flow'];

function Timer() {
  const [timerType, setTimerType] = useState(timerTypes[0]);
  return (
    <>
      <Control timerType={timerType} setTimerType={setTimerType} />
      <Time />
    </>
  );
}

export default Timer;
