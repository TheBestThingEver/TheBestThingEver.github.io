import express from "express";
import routes from "./routes";
import { hello } from "./controller";

const app = express();
app.set("view engine", "pug");

app.use(routes.home, hello);
export default app;