import { CONNECT_DB } from "@/config/connectDb";
import Message from "@/model/comment.model";
import { NextResponse } from "next/server"

//  get all message
export const GET = async(req)=>{

    try {
        await CONNECT_DB();
        const messages = await Message.find();

      if (messages.length > 0) return NextResponse.json({success:true, messages:messages.reverse()},{status:200});
      else return NextResponse.json({success:false, message:"Haven't any message"},{status:404});

    } catch (error) {
        return NextResponse.json({success:false, message:'Internal Server error ☹️'},{status:500});
    }

};

