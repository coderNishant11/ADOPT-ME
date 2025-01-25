async function fetchSearch({ animal, location, breed }) {
  const response = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
  );

  if (!response.ok) {
    throw new Error(`pet search not okay: ${animal}, ${location}, ${breed}`);
  }

  return await response.json();
}

export default fetchSearch;
