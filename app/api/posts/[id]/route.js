// url: http://localhost:3000/api/posts/12345
import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"

export const GET = async (request, { params }) => {
    try {
        const { id } = params;

       
        const post = await prisma.post.findUnique({
            where: {
                id
            }
        });
           
        if (!post) {
        return NextResponse.json(
            {message: "Post not found", err},
            {status: 404}
        )
        }

return NextResponse.json(post);
    } catch(err) {
        return NextResponse.json({message: "GET Error", err}, {status: 500})
    }
}

export const PATCH = async (request, {params}) => {
    try {
        const body = await request.json();
        const {title, description} = body;

        const {id} = params;

        const updatePost = await prisma.post.update({
            where: {
                id
            },
            data: {
                title,
                description
            }
        })

        if (!updatePost) {
            return NextResponse.json(
                {message: "Post not found", err},
                {status: 404}
            )
            }

        return NextResponse.json(updatePost);
    } catch(err) {
        return NextResponse.json({message: "update Error", err}, {status: 500})
    }
}

export const DELETE = async (request, { params }) => {
    try {
        const { id } = params;

       
         await prisma.post.delete({
            where: {
                id
            }
        });
           
     
return NextResponse.json("Post has beeen deleted");
    } catch(err) {
        return NextResponse.json({message: "DELETE Error", err}, {status: 500})
    }
}