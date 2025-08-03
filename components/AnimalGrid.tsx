import { Animal } from "@/hooks/useAnimals";
import AnimalCard from "./AnimalCard";

interface Props {
  animals: Animal[];
  onSelect: (animal: Animal) => void;
}

export default function AnimalGrid({ animals, onSelect }: Props) {
  return (
    <div className="max-w-[1800px] w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-white rounded-t-lg">
      {animals.map(animal => (
        <AnimalCard key={animal.id} animal={animal} onSelect={onSelect} />
      ))}
    </div>
  );
}
