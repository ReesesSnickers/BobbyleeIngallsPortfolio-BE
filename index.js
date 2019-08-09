const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");

const graphQlSchema = require("./schema/index");
const graphQlResolver = require("./resolvers/index");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolver,
    graphiql: true,

    introspection: true
  })
);
app.get("/", function(req, res) {
  res.redirect("/graphql");
});
console.log(
  "test",
  process.env.MONGO_USER,
  process.env.MONGO_PASSWORD,
  process.env.MONGO_DB
);
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${
      process.env.MONGO_PASSWORD
    }@bobbyleeingallsportfolio-lewo7.azure.mongodb.net/${
      process.env.MONGO_DB
    }?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(process.env.PORT || 8000);
  })
  .catch(err => {
    console.log(err);
  });
