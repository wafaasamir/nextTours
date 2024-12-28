import { tours } from "../data";
import { redirect } from "next/navigation";

// get user by Id
export async function GET(Request, { params }) {
  if (parseInt(params.id) > tours.length) {
    // return new Response("User not found", { status: 404 });
    redirect("/tours");
  }
  const tour = tours.find((tour) => tour.id === parseInt(params.id));
  return Response.json(tour);
}