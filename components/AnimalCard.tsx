import { Animal } from "@/hooks/useAnimals";
import { HiOutlineInformationCircle } from "react-icons/hi2";

interface Props {
  animal: Animal;
  onSelect: (animal: Animal) => void;
}

export default function AnimalCard({ animal, onSelect }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full"
            style={{ backgroundColor: animal.color }}
          />
          <div>
            <h2 className="font-semibold text-md text-black">{animal.name}</h2>
            <p className="text-sm text-gray-500">{animal.species}</p>
          </div>
        </div>
        <button
          onClick={() => onSelect(animal)}
          className="text-gray-500 hover:text-black"
        >
          <HiOutlineInformationCircle className="w-5 h-5" />
        </button>
      </div>

      <hr className="my-4 border-dashed" />

      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex justify-between">
          <span className="text-gray-500">Size</span>
          <span className="capitalize">{animal.size}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Prey</span>
          <span>{animal.prey.length}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Predators</span>
          <span>{animal.predators.length}</span>
        </div>
      </div>
    </div>
  );
}
