import express from "express";

export const postRouter = express.Router();

postRouter.put("/", createPost);
postRouter.get("/:id", getPostById);