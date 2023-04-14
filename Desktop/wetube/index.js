import express from "express";
import morgan from "morgan";

const app = express();

// const logger = (req, res, next) => {
//   let URL = req.url;

//   if (URL != "/") {
//     return res.send("NOT ALLOW");
//   }
//   console.log("I'm Middleware");
//   next();
// };

const logger = morgan("dev");

const handleHome = (req, res) => {
  return res.send("I'm Home");
};

app.use(logger);

app.get("/", handleHome);

const handleListen = () => console.log("http://localhost.4000");
app.listen(4000, handleListen);
