"use client";

import { useState } from "react";
import { useAnimals, Animal } from "@/hooks/useAnimals";
import AnimalGrid from "@/components/AnimalGrid";
import Header from "@/components/Header";
import AnimalPanel from "@/components/AnimalPanel";
import { useMemo } from "react";

export default function HomePage() {
  const { data: animals = [], isLoading, isError } = useAnimals();
  const [query, setQuery] = useState("");
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return animals.filter(
      a =>
        a.name.toLowerCase().includes(q) || a.species.toLowerCase().includes(q)
    );
  }, [animals, query]);

  return (
    <main className="max-w-[1800px] mx-auto h-screen flex overflow-hidden pt-2">
      <div className="flex-1 flex flex-col">
        <Header query={query} setQuery={setQuery} />
        <div className="flex-1 overflow-y-auto mt-12 p-4 bg-gray-50">
          {isLoading && <p>Loading...</p>}
          {isError && <p>Failed to load animals.</p>}
          <AnimalGrid animals={filtered} onSelect={setSelectedAnimal} />
        </div>
      </div>

      {selectedAnimal && (
        <AnimalPanel
          animal={selectedAnimal}
          onClose={() => setSelectedAnimal(null)}
        />
      )}
    </main>
  );
}
