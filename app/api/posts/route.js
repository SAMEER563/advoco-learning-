// url: http://localhost:3000/api/posts
import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"

export const POST = async (request) => {
    try {
        const body = await request.json();
        const {title, description} = body;

        const newPost = await prisma.post.create({
            data: {
                title,
                description
            }
        })

        return NextResponse.json(newPost);
    } catch(err) {
        return NextResponse.json({message: "POST Error", err}, {status: 500})
    }
}

export const GET = async () => {
    try {
       
        const posts = await prisma.post.findMany()
           
        
        return NextResponse.json(posts);

    } catch(err) {
        return NextResponse.json({message: "GET Error", err}, {status: 500})
    }
}