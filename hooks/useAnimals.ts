import { useQuery } from "@tanstack/react-query";

export interface Animal {
  id: number;
  name: string;
  image: string;
  species: string;
  prey: number[];
  predators: number[];
  color: string;
  size: "small" | "medium" | "large";
}

const fetchAnimals = async (): Promise<Animal[]> => {
  const res = await fetch("/api/animals");
  if (!res.ok) throw new Error("Failed to fetch animals");

  const json = await res.json();
  return json.data;
};

export function useAnimals() {
  return useQuery<Animal[]>({
    queryKey: ["animals"],
    queryFn: fetchAnimals,
  });
}
