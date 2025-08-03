"use client";

import { Animal } from "@/hooks/useAnimals";
import { HiX } from "react-icons/hi";
import RelationshipList from "./RelationshipList";

interface Props {
  animal: Animal;
  onClose: () => void;
}

export default function AnimalPanel({ animal, onClose }: Props) {
  return (
    <aside className="w-full sm:w-[350px] md:w-[400px] border-l border-gray-200 bg-white h-full flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <h2 className="text-lg font-semibold">{animal.name}</h2>
        <button onClick={onClose}>
          <HiX className="w-6 h-6 text-gray-500 hover:text-black" />
        </button>
      </div>

      <div className="p-4 flex flex-col gap-4 overflow-y-auto">
        <div className="flex flex-col items-center text-center">
          <div
            className="w-24 h-24 rounded-lg"
            style={{ backgroundColor: animal.color }}
          />
          <h3 className="mt-4 text-xl font-bold">{animal.name}</h3>
          <p className="text-gray-500">{animal.species}</p>
        </div>

        <div className="flex justify-center gap-4">
          <span className="text-sm px-3 py-1 bg-gray-100 rounded-md">
            🍴 Prey
          </span>
          <span className="text-sm px-3 py-1 bg-gray-100 rounded-md">
            ⚠️ Predators
          </span>
        </div>

        {/* Prey / Predator List (optional) */}
        <RelationshipList title="Prey" animalIds={animal.prey} />
        <RelationshipList title="Predators" animalIds={animal.predators} />
      </div>
    </aside>
  );
}
