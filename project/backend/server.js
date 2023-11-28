const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// ex:- const users = require("./routes/users");



// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(cors());

//recieve json format data
app.use(express.json());


// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose.connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  const port = process.env.PORT || 5050;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));

// Routes ex:- 
//app.use("/users", users);
//app.use('/api/cart/', cartProductRoutes);





//const tailoringInfo = require('./routes/tailoringInfo.js');
//app.use('/tailoringInfo', tailoringInfo);

