import { tours } from "./data";

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  // Extract query parameters
  const limit = parseInt(searchParams.get("limit")) || null;
  const page = parseInt(searchParams.get("page")) || 1;

  // If no limit, return all data
  if (!limit) {
    return Response.json(tours);
  }

  // Paginate data
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedTours = tours.slice(startIndex, endIndex);

  // Return paginated response
  return Response.json({
    data: paginatedTours,
    totalPages: Math.ceil(tours.length / limit),
  });
}
