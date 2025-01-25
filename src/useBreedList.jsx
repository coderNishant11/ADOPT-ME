import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const { isLoading, data } = useQuery({
    queryKey: ["breeds", animal],
    queryFn: () => fetchBreedList(animal),
    staleTime: 30000,
  });

  return [data?.breeds ?? [], isLoading];
}
