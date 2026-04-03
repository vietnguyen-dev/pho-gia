"use client";

import { useState } from "react";

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

export default function MenuClient({ items, sections }: { items: Item[]; sections: Section[] }) {
  const sectionDescriptions = new Map(sections.map((s) => [s.id, s.description]));
  const [search, setSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState<Set<number>>(new Set());

  const toggleFilter = (sectionId: number) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }
      return next;
    });
  };

  const sectionMap = items.reduce<Map<number, { name: string; items: Item[] }>>(
    (map, item) => {
      if (!map.has(item.section_id)) {
        map.set(item.section_id, { name: item.section_name, items: [] });
      }
      map.get(item.section_id)!.items.push(item);
      return map;
    },
    new Map()
  );

  const filteredSections = Array.from(sectionMap.entries())
    .filter(([id]) => activeFilters.size === 0 || activeFilters.has(id))
    .map(([id, section]) => ({
      id,
      ...section,
      items: section.items.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          (item.description ?? "").toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((section) => section.items.length > 0);

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
    <>
      {/* Search & Filters */}
      <section className="sticky top-20 z-40 bg-white border-b border-stone-200 py-4">
        <div className="max-w-4xl lg:max-w-6xl mx-auto px-6">
          {/* Search Bar */}
          <div className="relative mb-4">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search dishes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-12 py-3 border border-stone-200 rounded-full focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 hover:text-stone-600 transition-colors"
                aria-label="Clear search"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {Array.from(sectionMap.entries()).map(([id, section]) => (
              <button
                key={id}
                onClick={() => toggleFilter(id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeFilters.has(id)
                    ? "bg-brand text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {section.name}
              </button>
            ))}
            {activeFilters.size > 0 && (
              <button
                onClick={() => setActiveFilters(new Set())}
                className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap text-stone-500 hover:text-stone-700 transition-colors"
              >
                Clear all
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-16">
        <div className="max-w-4xl lg:max-w-6xl mx-auto px-6">
          {filteredSections.length > 0 ? (
            filteredSections.map((section) => {
              const midpoint = Math.ceil(section.items.length / 2);
              const leftColumn = section.items.slice(0, midpoint);
              const rightColumn = section.items.slice(midpoint);

              return (
                <div key={section.id} className="mb-16">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-stone-900 mb-2">
                      {section.name}
                    </h2>
                    {sectionDescriptions.get(section.id) && (
                      <p className="text-stone-500">{sectionDescriptions.get(section.id)}</p>
                    )}
                    <div className="w-16 h-1 bg-brand mt-4" />
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
                    <div>{leftColumn.map(renderItem)}</div>
                    <div>{rightColumn.map(renderItem)}</div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-16">
              <p className="text-stone-500 text-lg">
                No dishes found matching your search.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveFilters(new Set());
                }}
                className="mt-4 text-brand font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
