import { CONNECT_DB } from "@/config/connectDb";
import Message from "@/model/comment.model";
import { NextResponse } from "next/server"

//  get single message
export const GET = async(req,{params})=>{

    try {
        await CONNECT_DB();
        const {mId}=await params;
        // console.log(mId);
      const message = await Message.findOne({_id:mId});

      if (message) return NextResponse.json({success:true, message},{status:200});
      else return NextResponse.json({success:false, message:"Haven't any message"},{status:404});

    } catch (error) {
        return NextResponse.json({success:false, message:'Internal Server error ☹️'},{status:500});
    }

};


//  delete message message
export const DELETE =async(req,{params})=>{

    try {
        await CONNECT_DB();
        const {mId}=await params;
      const message = await Message.findOneAndDelete({_id:mId});

      if (message) return NextResponse.json({success:true, message:' Message Deleted'},{status:200},);
      else return NextResponse.json({success:false, message:"Haven't any message"},{status:404});

    } catch (error) {
        return NextResponse.json({success:false, message:'Internal Server error ☹️',error:error.message},{status:500},);
    }

};


