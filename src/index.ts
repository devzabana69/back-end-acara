import express from "express";
import bodyParser from "body-parser";

import router from "./routes/api";

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`server runing on http://localhost:${PORT}`);
});
