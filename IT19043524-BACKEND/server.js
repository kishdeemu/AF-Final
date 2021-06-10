const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const roomRoutes = require("./routes/rooms-routes");
const categoryRoutes = require("./routes/categories-routes");

mongoose.connect(
    'mongodb+srv://kishen:kishen1234@kishencluster.jfmbn.mongodb.net/af-2021-IT19043524?retryWrites=true&w=majority'
).then(() => {
    -console.log("Connected to af-2021-IT19043524 DB");
}).catch((err)=>{
    console.log(err);
})

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/rooms', roomRoutes);
app.use('/categories', categoryRoutes);


app.listen(5000, () => {
    console.log("Listening on port 5000");
});
