"use client";

import Image from "next/image";
import { useState } from "react";

const menuData = {
  pho: {
    title: "Pho",
    description: "Traditional Vietnamese noodle soup with 12-hour simmered broth",
    items: [
      { name: "Pho Tai", desc: "Rare beef slices", price: "14.95" },
      { name: "Pho Tai Nam", desc: "Rare beef & well-done flank", price: "15.95" },
      { name: "Pho Tai Bo Vien", desc: "Rare beef & meatballs", price: "15.95" },
      { name: "Pho Chin", desc: "Well-done brisket", price: "14.95" },
      { name: "Pho Dac Biet", desc: "House special with all meats", price: "17.95" },
      { name: "Pho Ga", desc: "Chicken noodle soup", price: "14.95" },
      { name: "Pho Chay", desc: "Vegetable pho with tofu", price: "13.95" },
    ],
  },
  noodles: {
    title: "Noodle Soups",
    description: "Other traditional Vietnamese noodle dishes",
    items: [
      { name: "Bun Bo Hue", desc: "Spicy beef soup with lemongrass", price: "15.95" },
      { name: "Hu Tieu Nam Vang", desc: "Clear pork broth with seafood", price: "15.95" },
      { name: "Mi Hoanh Thanh", desc: "Egg noodle soup with wontons", price: "14.95" },
      { name: "Bun Rieu", desc: "Crab & tomato noodle soup", price: "15.95" },
    ],
  },
  rice: {
    title: "Rice Plates",
    description: "Served with steamed jasmine rice and vegetables",
    items: [
      { name: "Com Suon Nuong", desc: "Grilled pork chop", price: "14.95" },
      { name: "Com Ga Nuong", desc: "Grilled lemongrass chicken", price: "14.95" },
      { name: "Com Bo Luc Lac", desc: "Shaking beef with garlic", price: "16.95" },
      { name: "Com Tam Dac Biet", desc: "Broken rice with pork, egg, skin", price: "15.95" },
      { name: "Com Chien", desc: "Vietnamese fried rice", price: "13.95" },
    ],
  },
  vermicelli: {
    title: "Vermicelli Bowls",
    description: "Rice vermicelli with fresh vegetables and fish sauce",
    items: [
      { name: "Bun Thit Nuong", desc: "Grilled pork over vermicelli", price: "14.95" },
      { name: "Bun Cha Gio", desc: "Egg rolls over vermicelli", price: "14.95" },
      { name: "Bun Tom Nuong", desc: "Grilled shrimp over vermicelli", price: "15.95" },
      { name: "Bun Bo Xao", desc: "Stir-fried beef over vermicelli", price: "15.95" },
      { name: "Bun Dac Biet", desc: "Combination vermicelli bowl", price: "16.95" },
    ],
  },
  banh: {
    title: "Banh Mi & Small Plates",
    description: "Vietnamese sandwiches and appetizers",
    items: [
      { name: "Banh Mi Dac Biet", desc: "Special combo sandwich", price: "9.95" },
      { name: "Banh Mi Thit Nuong", desc: "Grilled pork sandwich", price: "9.95" },
      { name: "Banh Mi Ga", desc: "Chicken sandwich", price: "9.95" },
      { name: "Goi Cuon (2)", desc: "Fresh spring rolls", price: "6.95" },
      { name: "Cha Gio (3)", desc: "Crispy egg rolls", price: "7.95" },
      { name: "Banh Xeo", desc: "Vietnamese crispy crepe", price: "12.95" },
    ],
  },
  drinks: {
    title: "Beverages",
    description: "Traditional Vietnamese drinks",
    items: [
      { name: "Ca Phe Sua Da", desc: "Vietnamese iced coffee", price: "5.50" },
      { name: "Ca Phe Den Da", desc: "Black iced coffee", price: "4.50" },
      { name: "Tra Da", desc: "Vietnamese iced tea", price: "2.50" },
      { name: "Sinh To Bo", desc: "Avocado smoothie", price: "6.50" },
      { name: "Nuoc Mia", desc: "Fresh sugarcane juice", price: "5.50" },
      { name: "Chanh Muoi", desc: "Salted lemonade", price: "4.50" },
    ],
  },
};

const filters = [
  { key: "all", label: "All" },
  { key: "pho", label: "Pho" },
  { key: "noodles", label: "Noodles" },
  { key: "rice", label: "Rice" },
  { key: "vermicelli", label: "Vermicelli" },
  { key: "banh", label: "Banh Mi" },
  { key: "drinks", label: "Drinks" },
];

export default function MenuPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredMenu = Object.entries(menuData)
    .filter(([key]) => activeFilter === "all" || key === activeFilter)
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
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeFilter === filter.key
                    ? "bg-brand text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
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
                  setActiveFilter("all");
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
    </div>
  );
}
