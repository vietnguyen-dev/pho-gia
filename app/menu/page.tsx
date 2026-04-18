"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

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

export default function MenuPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [sections, setSections] = useState<Section[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingNext, setIsLoadingNext] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadedSectionIds, setLoadedSectionIds] = useState<Set<number>>(new Set());
  const loadedSectionIdsRef = useRef<Set<number>>(new Set());
  const fetchingSectionIdsRef = useRef<Set<number>>(new Set());
  const isMountedRef = useRef(false);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const sectionDescriptions = useMemo(
    () => new Map(sections.map((s) => [s.id, s.description])),
    [sections]
  );
  const [search, setSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState<Set<number>>(new Set());

  const loadSectionItems = useCallback(
    async (sectionId: number, mode: "initial" | "next" = "next") => {
      if (
        loadedSectionIdsRef.current.has(sectionId) ||
        fetchingSectionIdsRef.current.has(sectionId)
      ) {
        return;
      }

      fetchingSectionIdsRef.current.add(sectionId);

      if (mode === "next") {
        setIsLoadingNext(true);
      }

      try {
        const response = await fetch(`/api/items?sectionId=${sectionId}`);

        if (!response.ok) {
          throw new Error("Unable to load section.");
        }

        const nextItems = (await response.json()) as Item[];

        if (!isMountedRef.current) {
          return;
        }

        setItems((currentItems) => {
          const existingIds = new Set(currentItems.map((item) => item.id));
          const uniqueItems = nextItems.filter((item) => !existingIds.has(item.id));
          return [...currentItems, ...uniqueItems];
        });

        setLoadedSectionIds((currentSectionIds) => {
          const nextSectionIds = new Set(currentSectionIds);
          nextSectionIds.add(sectionId);
          loadedSectionIdsRef.current = nextSectionIds;
          return nextSectionIds;
        });
      } catch {
        if (isMountedRef.current) {
          setError("We could not load the menu. Please try again.");
        }
      } finally {
        fetchingSectionIdsRef.current.delete(sectionId);

        if (isMountedRef.current && mode === "next") {
          setIsLoadingNext(false);
        }
      }
    },
    []
  );

  useEffect(() => {
    isMountedRef.current = true;

    async function loadMenuSections() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch("/api/sections");

        if (!response.ok) {
          throw new Error("Unable to load sections.");
        }

        const nextSections = (await response.json()) as Section[];

        if (!isMountedRef.current) {
          return;
        }

        setSections(nextSections);

        if (nextSections[0]) {
          await loadSectionItems(nextSections[0].id, "initial");
        }
      } catch {
        if (isMountedRef.current) {
          setError("We could not load the menu. Please try again.");
        }
      } finally {
        if (isMountedRef.current) {
          setIsLoading(false);
        }
      }
    }

    loadMenuSections();

    return () => {
      isMountedRef.current = false;
    };
  }, [loadSectionItems]);

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

    loadSectionItems(sectionId);
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

  const loadedSections = sections
    .filter((section) => loadedSectionIds.has(section.id))
    .map((section) => ({
      id: section.id,
      name: section.name,
      items: sectionMap.get(section.id)?.items ?? [],
    }));

  const filteredSections = loadedSections
    .filter((section) => activeFilters.size === 0 || activeFilters.has(section.id))
    .map((section) => ({
      ...section,
      items: section.items.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          (item.description ?? "").toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((section) => section.items.length > 0);

  const nextSection = sections.find((section) => !loadedSectionIds.has(section.id));
  const hasMoreSections = Boolean(nextSection);

  useEffect(() => {
    if (isLoading || error || !nextSection || !loadMoreRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadSectionItems(nextSection.id);
        }
      },
      { rootMargin: "600px 0px" }
    );

    observer.observe(loadMoreRef.current);

    return () => {
      observer.disconnect();
    };
  }, [error, isLoading, loadSectionItems, nextSection]);

  useEffect(() => {
    if (!search.trim()) {
      return;
    }

    sections
      .filter((section) => !loadedSectionIds.has(section.id))
      .forEach((section) => {
        loadSectionItems(section.id);
      });
  }, [loadedSectionIds, loadSectionItems, search, sections]);

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
        {item.price && <p className="text-brand font-semibold">${item.price}</p>}
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

  if (isLoading) {
    return (
      <section className="py-16">
        <div className="max-w-4xl lg:max-w-6xl mx-auto px-6">
          <div className="space-y-10">
            {[0, 1, 2].map((section) => (
              <div key={section}>
                <div className="h-8 w-48 bg-stone-100 rounded mb-6 animate-pulse" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
                  {[0, 1, 2, 3].map((item) => (
                    <div key={item} className="py-4 border-b border-stone-100">
                      <div className="h-5 w-3/4 bg-stone-100 rounded mb-3 animate-pulse" />
                      <div className="h-4 w-5/6 bg-stone-100 rounded animate-pulse" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16">
        <div className="max-w-4xl lg:max-w-6xl mx-auto px-6 text-center">
          <p className="text-stone-500 text-lg">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 text-brand font-medium hover:underline"
          >
            Reload menu
          </button>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-white">
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

      <section className="sticky top-20 z-40 bg-white border-b border-stone-200 py-4">
        <div className="max-w-4xl lg:max-w-6xl mx-auto px-6">
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

          <div className="flex gap-2 overflow-x-auto pb-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => toggleFilter(section.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeFilters.has(section.id)
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
          ) : !hasMoreSections && !isLoadingNext ? (
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
          ) : null}
          {hasMoreSections && (
            <div ref={loadMoreRef} className="py-8 text-center">
              {isLoadingNext ? (
                <p className="text-stone-500">Loading more dishes...</p>
              ) : (
                <span className="sr-only">Load more menu sections</span>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
