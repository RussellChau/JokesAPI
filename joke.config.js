const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/Jokes', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})  .then(() => console.log("connected to database"))
    .catch(err => console.log("Something went wrong", err))
