interface MessageCount {
  message: string | null;
  count: number;
}

export const increment: (count: number, amount?: number) => number = (
  count,
  amount = 1
) => (count += amount);

export const decrement: (count: number, amount?: number) => number = (
  count,
  amount = 1
) => (count -= amount);

export const limitedIncrement: (
  count: number,
  upperBound?: number,
  amount?: number
) => number = (count, upperBound = Infinity, amount = 1) =>
  count < upperBound ? increment(count, amount) : upperBound;

export const limitedDecrement: (
  count: number,
  lowerBound?: number,
  amount?: number
) => number = (count, lowerBound = -Infinity, amount = 1) =>
  count > lowerBound ? decrement(count, amount) : lowerBound;

export const limitedIncrementWithMessage: (
  count: number,
  message: string,
  upperBound?: number,
  amount?: number
) => MessageCount = (
  count: number,
  message: string,
  upperBound = Infinity,
  amount = 1
) => {
  return {
    message: count + amount < upperBound ? null : message,
    count: limitedIncrement(count, upperBound, amount),
  };
};

export const limitedDecrementWithMessage: (
  count: number,
  message: string,
  lowerBound?: number,
  amount?: number
) => MessageCount = (
  count: number,
  message: string,
  lowerBound = -Infinity,
  amount = 1
) => {
  return {
    message: count - amount > lowerBound ? null : message,
    count: limitedDecrement(count, lowerBound, amount),
  };
};
