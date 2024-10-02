import { connectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

const LoadDB = async ()=>{
    await connectDB()
}
LoadDB();

export async function POST(request){
    // process the form data here
    const formData = await request.formData();

    // do something with the form data...
    const emailData = {
        email: `${formData.get('email')}`,
    }
    await EmailModel.create(emailData)
   
    // return the response
    return NextResponse.json({success: true, msg: 'Email Subscribed'})
}


export async function GET(request){
    const emails =  await EmailModel.find({})
    return NextResponse.json({emails})
}


export async function DELETE(request){
    const id  = request.nextUrl.searchParams.get("id");
    await EmailModel.findByIdAndDelete(id)
    return NextResponse.json({success: true, msg: 'Email Unsubscribed'});
}