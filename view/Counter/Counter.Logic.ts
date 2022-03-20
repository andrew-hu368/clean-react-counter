import { useState } from 'react';

import {
  limitedIncrementWithMessage,
  limitedDecrementWithMessage,
} from '../../domain/counter';

export const useCounter = (
  initialCount = 0,
  lowerBoundMsg = 'Min!',
  upperBoundMsg = 'Max!'
) => {
  const [count, setCount] = useState(initialCount);
  const [message, setMessage] = useState<null | string>(null);

  const increment = () => {
    const { message, count: incrementedCount } = limitedIncrementWithMessage(
      count,
      upperBoundMsg,
      10
    );

    setCount(incrementedCount);
    setMessage(message);
  };

  const decrement = () => {
    const { message, count: decrementCount } = limitedDecrementWithMessage(
      count,
      lowerBoundMsg,
      0
    );

    setCount(decrementCount);
    setMessage(message);
  };

  return {
    count,
    message,
    increment,
    decrement,
  };
};
