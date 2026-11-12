// server start karta hai
// server database se connect karta hai

const app = require(`./src/app`);
const mongoose = require("mongoose");

function connectedToDb() {
  mongoose
    .connect("mongodb+srv://kamlesh:l2U3KM6vtCYZD6KJ@cluster0.mtqrgrb.mongodb.net/DAY-06")
    .then(() => {
      console.log("connected to Database");
    });
}

connectedToDb()

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
