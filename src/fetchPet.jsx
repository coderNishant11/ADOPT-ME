const fetchPet = async (id) => {
  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`details/${id}  fetch not ok`);
  }

  const data = await apiRes.json();

  return data;
};

export default fetchPet;
