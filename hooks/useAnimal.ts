import { useQuery } from "@tanstack/react-query";
import { Animal } from "./useAnimals";

const fetchAnimal = async (id: string): Promise<Animal> => {
  const res = await fetch(`/api/animals/${id}`);
  if (!res.ok) throw new Error("Animal not found");
  const json = await res.json();
  return json.data;
};

export function useAnimal(id?: string) {
  return useQuery({
    queryKey: ["animal", id],
    queryFn: () => fetchAnimal(id!),
    enabled: !!id,
  });
}
