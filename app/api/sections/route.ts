import { getConnection } from "@/app/lib/db";

export async function GET() {
  const connection = await getConnection();
  const [rows] = await connection.execute("SELECT * FROM vw_sections;");
  await connection.end();

  return Response.json(rows);
}
