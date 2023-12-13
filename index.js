const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const lenderAPIs = require("./routes/lenders");
const financeAPIs = require("./routes/finance");
require("dotenv").config();

const port = process.env.PORT || 3000;
const app = express();

// Parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/assets", express.static("assets"));
app.use(cors());

// Use Morgan middleware for logging
app.use(morgan("combined"));

app.use("/api/lender", lenderAPIs);
app.use("/api/finance", financeAPIs);

// Generic error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  console.log(
    `Server is running on port ${port} in ${process.env.NODE_ENV} mode`
  );
});
