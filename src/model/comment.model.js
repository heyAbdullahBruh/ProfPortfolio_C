import mongoose from "mongoose";

const msgSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: true,
    },
    // teleId:{
    //     type:String,
    //     required:true,
    //     default:' '
    // },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Message =
  mongoose.models.messages || mongoose.model("messages", msgSchema);

export default Message;
