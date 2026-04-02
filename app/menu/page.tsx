import Image from "next/image";
import { getConnection } from "@/app/lib/db";

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

async function getItems(): Promise<Item[]> {
  const connection = await getConnection();
  const [rows] = await connection.execute("SELECT * FROM vw_items ORDER BY section_id, menu_position;");
  await connection.end();
  return rows as Item[];
}

export default async function MenuPage() {
  const items = await getItems();

  const sections = items.reduce<Map<number, { name: string; items: Item[] }>>(
    (map, item) => {
      if (!map.has(item.section_id)) {
        map.set(item.section_id, { name: item.section_name, items: [] });
      }
      map.get(item.section_id)!.items.push(item);
      return map;
    },
    new Map()
  );

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

      {/* Menu Sections */}
      <section className="py-16">
        <div className="max-w-4xl lg:max-w-6xl mx-auto px-6">
          {Array.from(sections.values()).map((section) => {
            const midpoint = Math.ceil(section.items.length / 2);
            const leftColumn = section.items.slice(0, midpoint);
            const rightColumn = section.items.slice(midpoint);

            const renderItem = (item: Item) => (
              <div key={item.id} className="py-4 border-b border-stone-100">
                <div className="flex justify-between items-start">
                  <div className="flex-1 pr-4">
                    <h3 className="font-semibold text-stone-900">
                      <span className="text-brand mr-2">{item.menu_position}.</span>
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="text-stone-500 text-sm mt-1">{item.description}</p>
                    )}
                  </div>
                  {item.price && (
                    <p className="text-brand font-semibold">${item.price}</p>
                  )}
                </div>
                {item.variants && (
                  <div className="mt-2 ml-6 space-y-1">
                    {item.variants.map((variant, vIndex) => (
                      <div key={vIndex} className="flex justify-between text-sm">
                        <span className="text-stone-600">
                          <span className="text-brand font-medium mr-2">
                            {String.fromCharCode(65 + vIndex)}.
                          </span>
                          {variant.option}
                        </span>
                        {variant.price && (
                          <span className="text-brand font-medium">${variant.price}</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );

            return (
              <div key={section.name} className="mb-16">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-stone-900 mb-2">
                    {section.name}
                  </h2>
                  <div className="w-16 h-1 bg-brand mt-4" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
                  <div>{leftColumn.map(renderItem)}</div>
                  <div>{rightColumn.map(renderItem)}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
