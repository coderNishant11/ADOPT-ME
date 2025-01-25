import { useContext, useState } from "react";
import Results from "./Results";
import useBreedList from "./useBreedList";
import fetchSearch from "./fetchSearch";
import { useQuery } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [adoptedPet] = useContext(AdoptedPetContext);
  console.log(adoptedPet);
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
        {adoptedPet.length > 0 &&
          adoptedPet.map((adoptPet) => (
            <div className="pet image-container" key={adoptPet.name}>
              <img src={adoptPet.images[0]} alt={adoptedPet.name} />
            </div>
          ))}

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
