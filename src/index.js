const express = require("express");

const bodyParser = require("body-parser");

const v1CreditRouter = require("./v1/routes/creditRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/v1", v1CreditRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});