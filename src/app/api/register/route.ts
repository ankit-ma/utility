import { connectToDatabase } from "@/lib/mongodb";

export const revalidate = 60;
export async function POST(req: Request) {
  console.log("Inside hanlder of register api");

  const { db } = await connectToDatabase();

  const newUser = await req.formData();

  const user = {
    firstName: newUser.get("employeeName"),
    email: newUser.get("email"),
    password: newUser.get("password"),
  };
  console.log(user);
  await db.collection("user").insertOne(user);

  return new Response("User Added", {
    status: 201,
  });
}
