import express from "express";
import "dotenv/config";
import path from "node:path";
import rootRouter from "./routers/rootRouter.mjs";
const app = express();

const __dirname = import.meta.dirname;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", rootRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});