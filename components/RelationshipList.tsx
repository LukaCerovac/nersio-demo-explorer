"use client";

import { useAnimals } from "@/hooks/useAnimals";

interface Props {
  title: string;
  animalIds: number[];
}

export default function RelationshipList({ title, animalIds }: Props) {
  const { data: allAnimals = [] } = useAnimals();

  const related = allAnimals.filter(a => animalIds.includes(Number(a.id)));

  if (related.length === 0) return null;

  return (
    <section className="mt-4">
      <h2 className="text-md font-semibold mb-2 px-2">{title}</h2>
      <div className="space-y-2">
        {related.map(a => (
          <div
            key={a.id}
            className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded"
          >
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: a.color }}
            />
            <div className="text-sm">
              <div className="font-medium">{a.name}</div>
              <div className="text-gray-500 text-xs">{a.species}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
