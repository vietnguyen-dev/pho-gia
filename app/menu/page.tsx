import Image from "next/image";
import { getConnection } from "@/app/lib/db";
import MenuClient from "./menu-client";

export const dynamic = "force-dynamic";

type Variant = { option: string; price?: string };
type Item = {
  id: number;
  name: string;
  menu_position: number;
  section_id: number;
  section_name: string;
  description: string | null;
  price: string | null;
  variants: Variant[] | null;
};
type Section = { id: number; name: string; description: string | null };

async function getItems(): Promise<Item[]> {
  const connection = await getConnection();
  const [rows] = await connection.execute("SELECT * FROM vw_items ORDER BY section_id, menu_position;");
  await connection.end();
  return rows as Item[];
}

async function getSections(): Promise<Section[]> {
  const connection = await getConnection();
  const [rows] = await connection.execute("SELECT * FROM vw_sections;");
  await connection.end();
  return rows as Section[];
}

export default async function MenuPage() {
  const [items, sections] = await Promise.all([getItems(), getSections()]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Image */}
      <section className="relative bg-brand py-20 overflow-hidden">
        <Image
          src="/pho-tai.png"
          alt="Pho Tai"
          fill
          className="object-cover rotate-180 opacity-30"
          priority
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <p className="text-white/70 font-medium tracking-widest uppercase mb-2">
            Pho Gia Milwaukie
          </p>
          <h1 className="text-5xl font-bold text-white mb-4">Our Menu</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Authentic Vietnamese dishes made fresh daily with traditional recipes
          </p>
        </div>
      </section>

      <MenuClient items={items} sections={sections} />
    </div>
  );
}
