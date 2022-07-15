import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routers/authRouter.js";
import markdownRouter from "./routers/markdownRouter.js";

dotenv.config();

const app = express();
app.use([cors(), express.json()]);

app.use(authRouter);

app.use(markdownRouter);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}!`);
});
