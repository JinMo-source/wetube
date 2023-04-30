import "dotenv/config";
import app from "./server";
import "./db";

console.log(process.env.MONGO_URL, "ENV");
const handleListen = () => console.log("http://localhost.4000");
app.listen(4000, handleListen);
