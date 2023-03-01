import mongoose, { Document, Schema } from "mongoose";

export interface IUser {
  username: string;
  password: string;
}

export interface IUserModel extends IUser, Document {}

const userSchema: Schema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<IUserModel>("user", userSchema);
