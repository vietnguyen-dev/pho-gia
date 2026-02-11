"use client";

import { useState } from "react";

type Variant = { option: string; price: string };
type MenuItem = {
  num: number;
  name: string;
  desc: string;
  price?: string;
  variants?: Variant[];
  vegetarian?: boolean;
  glutenFree?: boolean;
};
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
          item.desc.toLowerCase().includes(search.toLowerCase()),
      ),
    }))
    .filter((category) => category.items.length > 0);

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

          {/* Dietary Legend */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3 text-sm text-stone-600">
            <span className="flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-700 text-xs font-bold leading-none">
                V
              </span>
              Vegetarian Option Available
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold leading-none">
                GF
              </span>
              Gluten-Free Option Available
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-5 h-5 text-red-500" viewBox="0 0 512 512" fill="currentColor">
                <path d="M330.67 263.12V173.4l-52.75-24.22C219.44 218.76 197.58 400 56 400a56 56 0 0 0 0 112c212.64 0 370.65-122.87 419.18-210.34l-144.51-38.66zm46.1-74.98c6.37-7.45 17.54-7.93 24.59-1.11l28.75 27.79c6.41 6.19 6.86 16.39 1 23.25L400 268.44l-53.18-14.22z" />
              </svg>
              Spicy
            </span>
            <span className="text-stone-700 font-medium">*Prices subject to change</span>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {filters
              .filter((f) => f.key !== "all")
              .map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => toggleFilter(filter.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-2 ${
                    activeFilters.has(filter.key)
                      ? "bg-brand text-white"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
                >
                  {filter.label}
                  {activeFilters.has(filter.key) && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
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
          {filteredMenu.length > 0 ? (
            filteredMenu.map((category) => {
              const midpoint = Math.ceil(category.items.length / 2);
              const leftColumn = category.items.slice(0, midpoint);
              const rightColumn = category.items.slice(midpoint);

              const renderItem = (item: MenuItem, idx: number) => (
                <div key={idx} className="py-4 border-b border-stone-100">
                  <div className="flex justify-between items-start">
                    <div className="flex-1 pr-4">
                      <h3 className="font-semibold text-stone-900">
                        <span className="text-brand mr-2">{item.num}.</span>
                        {item.name}
                        {item.vegetarian && (
                          <span
                            className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-700 text-xs font-bold leading-none ml-1.5 align-middle"
                            title="Vegetarian option available"
                          >
                            V
                          </span>
                        )}
                        {item.glutenFree && (
                          <span
                            className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold leading-none ml-1 align-middle"
                            title="Gluten-free option available"
                          >
                            GF
                          </span>
                        )}
                      </h3>
                      <p className="text-stone-500 text-sm mt-1">{item.desc}</p>
                    </div>
                    {item.price && (
                      <p className="text-brand font-semibold">${item.price}</p>
                    )}
                  </div>
                  {item.variants && (
                    <div className="mt-2 ml-6 space-y-1">
                      {item.variants.map((variant, vIndex) => (
                        <div
                          key={vIndex}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-stone-600">
                            <span className="text-brand font-medium mr-2">
                              {String.fromCharCode(65 + vIndex)}.
                            </span>
                            {variant.option}
                          </span>
                          <span className="text-brand font-medium">
                            ${variant.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );

              return (
                <div key={category.key} className="mb-16">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-stone-900 mb-2">
                      {category.title}
                    </h2>
                    <p className="text-stone-500">{category.description}</p>
                    <div className="w-16 h-1 bg-brand mt-4" />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
                    <div>
                      {leftColumn.map((item, index) => renderItem(item, index))}
                    </div>
                    <div>
                      {rightColumn.map((item, index) =>
                        renderItem(item, index),
                      )}
                    </div>
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
