import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const { pageParam = 1 } = req.query;

    const URL =
      process.env.NEXT_PUBLIC_IMAGES_URL +
      `/api/products?populate=*&pagination[page]=${pageParam}&pagination[pageSize]=10&sort[1]=id:desc`;

    const res = await fetch(URL, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_APP_API_TOKEN}`,
      },
    });

    const data = await res.json();

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
};
