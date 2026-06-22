import { NextRequest, NextResponse } from "next/server";
import { getPostBySlug } from "@/lib/ghost";

export const revalidate = 300;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json({ post });
  } catch (err) {
    console.error("API blog/[slug] GET error:", err);
    return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
  }
}