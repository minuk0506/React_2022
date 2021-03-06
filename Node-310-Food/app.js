/**
 * express generator ES6+ template
 * @edit : callor@callor.com
 * @since : 2020-12-10
 * @see : nodejs + express 프로젝트에서 ES6+ 문법을 사용하기 위한 template
 */
import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import mongoose from "mongoose";
import { mongoURL } from "./config/mongoConfig.js";

const dbConn = mongoose.connection;
// 최초연결할때 한번만 메시지 보여주기
dbConn.once("open", () => {
  console.log("MongDB Open OK");
});
// 오류가 발생하면 항상 감시하기
dbConn.on("error", (err) => {
  console.log.apply(err);
});

mongoose.connect(mongoURL);

import foodRouter from "./routes/food.js";
import usersRouter from "./routes/users.js";

const app = express();

// Disable the fingerprinting of this web technology. 경고
app.disable("x-powered-by");

// view engine setup
app.set("views", path.join("./views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join("./client/build")));

app.use("/food", foodRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
