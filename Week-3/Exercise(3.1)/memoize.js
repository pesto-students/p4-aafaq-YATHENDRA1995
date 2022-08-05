// Timer Function
const timer = (fn) => {
  console.time();
  console.log(fn());
  console.timeEnd();
};

// Main Function
const add = (a, b) => {
  if (!!a && !!b) return a + b;
  if (!!a) return a;
  if (!!b) return b;
};

const memoize = (fn) => {
  const data = new Map();
  return (...args) => {
    const key = args.toString();
    if (!data.has(key)) {
      data.set(key, fn(...args));
    }
    return data.get(key);
  };
};

const memoizeSum = memoize(add);

timer(() => memoizeSum(100, 100));
timer(() => memoizeSum(100));
timer(() => memoizeSum(100, 200));
timer(() => memoizeSum(100, 100));
