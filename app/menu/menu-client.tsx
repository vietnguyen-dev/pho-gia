"use client";

import { useState } from "react";

type MenuItem = { name: string; desc: string; price: string };
type Category = { title: string; description: string; items: MenuItem[] };
type MenuData = Record<string, Category>;
type Filter = { key: string; label: string };

export default function MenuClient({
  menuData,
  filters,
}: {
  menuData: MenuData;
  filters: Filter[];
}) {
  const [search, setSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());

  const toggleFilter = (key: string) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const filteredMenu = Object.entries(menuData)
    .filter(([key]) => activeFilters.size === 0 || activeFilters.has(key))
    .map(([key, category]) => ({
      key,
      ...category,
      items: category.items.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.desc.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((category) => category.items.length > 0);

  return (
    <>
      {/* Search & Filters */}
      <section className="sticky top-20 z-40 bg-white border-b border-stone-200 py-4">
        <div className="max-w-4xl mx-auto px-6">
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
            {filters
              .filter((f) => f.key !== "all")
              .map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => toggleFilter(filter.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeFilters.has(filter.key)
                      ? "bg-brand text-white"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
                >
                  {filter.label}
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
        <div className="max-w-4xl mx-auto px-6">
          {filteredMenu.length > 0 ? (
            filteredMenu.map((category) => (
              <div key={category.key} className="mb-16">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-stone-900 mb-2">
                    {category.title}
                  </h2>
                  <p className="text-stone-500">{category.description}</p>
                  <div className="w-16 h-1 bg-brand mt-4" />
                </div>

                <div className="space-y-4">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-start py-4 border-b border-stone-100 last:border-0"
                    >
                      <div className="flex-1 pr-4">
                        <h3 className="font-semibold text-stone-900">
                          {item.name}
                        </h3>
                        <p className="text-stone-500 text-sm mt-1">{item.desc}</p>
                      </div>
                      <p className="text-brand font-semibold">${item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <p className="text-stone-500 text-lg">No dishes found matching your search.</p>
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

          {/* Note */}
          <div className="bg-stone-50 rounded-2xl p-8 text-center">
            <p className="text-stone-600">
              Prices subject to change. Please inform us of any allergies.
              <br />
              Gluten-free and vegetarian options available upon request.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
