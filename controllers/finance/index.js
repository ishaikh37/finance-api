const { availbleFinanceOptions } = require("./options");

const financeOptions = (req, res) => {
  res.json({
    message: "Finance Options",
    data: availbleFinanceOptions,
  });
};

module.exports = {
  financeOptions,
};
