import express from "express";
import { createPost, getPostById } from "../postController";

export const postRouter = express.Router();

postRouter.put("/", createPost);
postRouter.get("/:id", getPostById);