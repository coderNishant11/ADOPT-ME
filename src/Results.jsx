import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets ? (
        <h2>No pet found</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
