import { getConnection } from "@/app/lib/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sectionId = searchParams.get("sectionId");
  const connection = await getConnection();

  try {
    if (sectionId) {
      const parsedSectionId = Number(sectionId);

      if (!Number.isInteger(parsedSectionId)) {
        return Response.json({ error: "Invalid sectionId." }, { status: 400 });
      }

      const [rows] = await connection.execute(
        "SELECT * FROM vw_items WHERE section_id = ? ORDER BY menu_position;",
        [parsedSectionId]
      );

      return Response.json(rows);
    }

    const [rows] = await connection.execute(
      "SELECT * FROM vw_items ORDER BY section_id, menu_position;"
    );

    return Response.json(rows);
  } finally {
    await connection.end();
  }
}
