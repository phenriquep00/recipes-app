import { useEffect, useState } from "react";
import { Recipe } from "../Recipe/Recipe";

export function TrendingRecipes() {
  const [trending, setTrending] = useState<any>([]);

  const checkCached = localStorage.getItem("trending");

  const getTrendingRecipes = async () => {
    if (checkCached) {
      console.log(checkCached);

      setTrending(await JSON.parse(checkCached));
      console.log(trending);
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_SPOONACULAR_REACT_API_KEY
        }&number=8`
      );
      const data = await api.json();
      console.log(data.recipes);

      localStorage.setItem("trending", JSON.stringify(data.recipes));
      setTrending(data.recipes);
    }
  };

  useEffect(() => {
    getTrendingRecipes();
  }, []);

  useEffect(() => {
    console.log(trending);
  }, [trending]);

  return (
    <section className="w-full flex flex-col items-center pt-5 min-h-[420px] bg-zinc-300 rounded-lg">
      <h1 className="text-gray-500 text-lg font-bold">Trending Recipes</h1>
      {/* TODO: add the carousel here:  */}
      <div className="mt-8 pl-4 flex w-full h-full pt-4 gap-3 text-white overflow-x-scroll pb-6">
        {trending.length !== 0 &&
          trending.map((recipe: any, index: number) => (
            <div key={recipe.id} className="">
              <Recipe
                recipeId={recipe.id}
                title={recipe.title}
                image={recipe.image}
                prepTime={recipe.readyInMinutes}
              />
            </div>
          ))}
      </div>
    </section>
  );
}
