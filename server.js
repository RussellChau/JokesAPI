const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

require("./server/configs/jokes.config");
require("./server/routes/jokes.routes")(app);

app.listen(3000, () => console.log("You've connected to local host 3000"))
