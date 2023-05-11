module.exports = {
  eq: function (a, b) {
    return a == b;
  },
  mod: function (num, mod) {
    return num % mod;
  },
  mul: function (num, percent) {
    console.log("salary:", num);
    console.log("percent:", percent);
    const result = (Number(num) * Number(percent)) / 100;
    console.log("result:", result);
    return result;
  },
};
