import { useState } from "react";
import Results from "./Results";
import useBreedList from "./useBreedList";
import fetchSearch from "./fetchSearch";
import { useQuery } from "@tanstack/react-query";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParam, setRequestParam] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const results = useQuery({
    queryKey: ["search", requestParam],
    queryFn: () => fetchSearch(requestParam),
    staleTime: 30000,
  });
  const pets = results?.data?.pets ?? [];

  const [animal, setAnimal] = useState("");

  const [breeds] = useBreedList(animal);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setRequestParam(obj);
        }}
      >
        <label htmlFor="location">
          location
          <input id="location" placeholder="Location" name="location" />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select disabled={!breeds.length} id="breed" name="breed">
            <option />
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
