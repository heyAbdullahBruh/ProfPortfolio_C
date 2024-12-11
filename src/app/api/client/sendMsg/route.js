import { CONNECT_DB } from "@/config/connectDb";
import Message from "@/model/comment.model";
import { NextResponse } from "next/server"

//  Post a message
export const POST = async(req)=>{

    try {
        await CONNECT_DB();
        const {name,mail,teleId, subject, message}=await req.json();
        
        if (name && mail && subject && message) {
            const newMsg = new Message({
                name,
                mail,
                teleId, 
                subject, 
                message
            });

            await newMsg.save();
            // console.log(req);

            return NextResponse.json({success:true,message:'Thanks for your message 😊'},{status:200});

        } else {
            return NextResponse.json({success:false, message:'Please fill the form 😊'},{status:404});
        }

    } catch (error) {
        return NextResponse.json({success:false, message:'Internal Server error ☹️',error:error.message},{status:500});
    }

};

