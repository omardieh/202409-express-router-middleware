const userRouter = require("express").Router();

userRouter.get("/users", (req, res) => {});
userRouter.get("/users/:userID", (req, res) => {});

module.exports = userRouter;
