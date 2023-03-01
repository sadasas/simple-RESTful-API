import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
}, {
    versionKey: false,
});
export default mongoose.model("user", userSchema);
