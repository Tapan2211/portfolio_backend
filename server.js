
import http from "http";
import app from "./src/app.js";

const PORT = process.env.PORT || 5001;

http.createServer(app).listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
