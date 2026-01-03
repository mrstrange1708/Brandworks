const express = require("express");
const app = express();
const dotenv = require("dotenv");
const routes = require("./routes/userRoute");
const cors = require("cors");
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 3000 ;

app.use(cors());
app.use('/api' , routes);

app.use('/health' , (req , res) => {
    res.send("Server is running on port " + PORT);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});