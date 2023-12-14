// functions/lender.js
const app = require("../index"); // Import the Express app

exports.handler = async (event, context) => {
  return app(event, context); // Use the Express app in the serverless function
};
