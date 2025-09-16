const add = (n) => {
  return n * (n + 1) / 2;
};


const t1 = performance.now();
console.log("add", add(10000000));
const t2 = performance.now();

console.log("Total time", (t2 - t1) / 1000);