import { cookies } from "next/headers";
import authApiRequest from "src/app/api/auth/requests";

export async function POST() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("sessionToken")?.value;
  if (!sessionToken) {
    return Response.json(
      { message: "Không nhận được session token" },
      {
        status: 400,
      }
    );
  }

  try {
    const res = await authApiRequest.logout({ sessionToken });

    return Response.json(res.payload, {
      status: 200,
      headers: {
        "Set-Cookie": `sessionToken=; Path=/; HttpOnly; Max-Age=0`,
      },
    });
  } catch (err) {
    return Response.json(
      { message: (err as Error).message },
      {
        status: 400,
      }
    );
  }
}
