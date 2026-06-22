import { NextRequest, NextResponse } from "next/server";
import { getPosts } from "@/lib/ghost";

export const revalidate = 300; // ISR 5min

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = parseInt(searchParams.get("limit") || "12", 10);

  try {
    const posts = await getPosts(limit);
    return NextResponse.json({ posts });
  } catch (err) {
    console.error("API blog GET error:", err);
    return NextResponse.json({ posts: [], error: "Failed to fetch posts" }, { status: 200 });
  }
}