const { calculateLoanDetails } = require("../../utils/financeUtils");
const { availbleFinanceOptions } = require("./options");

const financeOptions = (req, res) => {
  res.json({
    message: "Finance Options",
    data: availbleFinanceOptions,
  });
};

const financeCalculator = (req, res) => {
  const { selectedTerms, price, deposit } = req.body;
  const financePlan = availbleFinanceOptions.find(
    (data) => data.FullName === selectedTerms
  );
  const { Term, AnnualInterestRate } = financePlan;
  const finalLoanDetails = calculateLoanDetails(
    price,
    deposit,
    Term,
    AnnualInterestRate
  );
  res.json({
    loanDetails: finalLoanDetails,
  });
};

module.exports = {
  financeOptions,
  financeCalculator,
};
