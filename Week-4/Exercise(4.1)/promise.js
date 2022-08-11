const getNumber = () => {
  return new Promise((resolve, reject) => {
    const random = parseInt(Math.random() * 100, 10);
    if (random % 5 !== 0) resolve(`Resolve - ${random}`);
    else reject(`Reject - ${random}`);
  });
};

getNumber().then(console.log).catch(console.log);
