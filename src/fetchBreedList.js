async function fetchBreedList(animal) {
  if (!animal) return [];
  const response = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
  );
  if (!response.ok) {
    throw new Error(`breeds ${animal} fetch not ok`);
  }

  return await response.json();
}

export default fetchBreedList;
