const initLender = (req, res) => {
  const logoURL = `${req.protocol}://${req.get("host")}/assets/Logo.png`;
  res.json({
    message: "Lender details",
    lenderLogo: logoURL,
    bestOffer: "Get in on Fianance from £30 per month",
    subtitle: "Instant decisions ~ 96% Approval Rate",
  });
};

module.exports = {
  initLender,
};
