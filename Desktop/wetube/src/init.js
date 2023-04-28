import app from "./server";
import "dotenv/config";
import "./db";

console.log(process.env.MONGO_URL, "ENV");
const handleListen = () => console.log("http://localhost.4000");
app.listen(4000, handleListen);
