import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { authenticate } from "@/lib/database";

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body: unknown = await request.json();
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "A product object is required" }, { status: 400 });
    }

    const data = body as Record<string, unknown>;
    const name = typeof data.name === "string" ? data.name.trim() : "";
    const description = typeof data.description === "string" ? data.description.trim() : "";
    const price = typeof data.price === "number" ? data.price : Number(data.price);
    if (!name || !description || !Number.isFinite(price) || price < 0) {
      return NextResponse.json(
        { error: "Name, description, and a valid non-negative price are required" },
        { status: 400 },
      );
    }

    const db = await authenticate();
    const product = await db.collection("Products").create({
      Name: name,
      description,
      price,
      clerkUserId: userId,
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Failed to create product", error);
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
  }
}
