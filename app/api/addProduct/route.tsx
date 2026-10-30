import { NextRequest, NextResponse } from "next/server";
import {auth} from '@clerk/nextjs/server'
import { db, authenticate} from "@/lib/database";


export async function GET(request: NextRequest) {
  try {
    const {userId}= await auth()
    await authenticate();
    const { searchParams } = new URL(request.url);
     // Extract the variables
    const name = searchParams.get("name");
    const description = searchParams.get("description");
    const price = searchParams.get("price");
    // check they exist
    if (!userId) {
      return NextResponse.json({error: "unauthorized"}, {status: 401});
    }
    if (!name || !description || price === null || price.trim() === "" || userId === "") {
      return NextResponse.json(

        { error: "Name, description and price are required" },

        { status: 400 }

      );

    }
   
    const product = await db.collection("products").create({
      name,
      description,
      price: price,
      userId: userId,
    });
    // send the OK back to the client with the created product
    return NextResponse.json(product, { status: 201 });
  } catch (error) {

    console.error(error);

    return NextResponse.json(

      { error: "Failed to create product" },

      { status: 500 }

    );

  }

}