export async function getRecipesByTag(tag: string) {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/search?apiKey=${
      import.meta.env.VITE_SPOONACULAR_REACT_API_KEY
    }&cuisine=${tag}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.results;
}
