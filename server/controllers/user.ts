import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import User from "../models/user";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    username,
    password,
  });

  return user
    .save()
    .then((user) => res.status(201).json({ user }))
    .catch((error) => res.status(500).json({ user }));
};

const readUser = (req: Request, res: Response, next: NextFunction) => {
  const username = req.params.username;

  return User.findOne({ username: username })
    .then((user) =>
      user
        ? res.status(200).json({ user })
        : res.status(404).json({ message: username })
    )
    .catch((error) => res.status(500).json({ error }));
};

export default { createUser, readUser };
