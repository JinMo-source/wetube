import "./db";
import app from "./server";

const handleListen = () => console.log("http://localhost.4000");
app.listen(4000, handleListen);
