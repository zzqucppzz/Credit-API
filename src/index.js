const express = require("express");

const bodyParser = require("body-parser");

const apicache = require("apicache");
const v1CreditRouter = require("./v1/routes/creditRoutes");

const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express();
const cache = apicache.middleware;
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(cache("2 minutes"));

app.use("/api/v1/credits", v1CreditRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);

  V1SwaggerDocs(app, PORT);
});