import { useEffect, useState } from "react";
import { Recipe } from "../Recipe/Recipe";

export function TrendingRecipes() {
  const [trending, setTrending] = useState<any>([]);

  const checkCached = localStorage.getItem("trending");

  // FIXME: the api request doesn't get setted to the trending state;

  const getTrendingRecipes = async () => {
    if (checkCached) {
      console.log(checkCached)
      
      setTrending(await JSON.parse(checkCached));
      console.log(trending)
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_SPOONACULAR_REACT_API_KEY
        }&number=8`
      );
      const data = await api.json();
      console.log(data.recipes)

      localStorage.setItem("trending", JSON.stringify(data.recipes));
      setTrending(data.recipes);
      console.log(trending)
    }
  };

  useEffect(() => {
    getTrendingRecipes();
    
  }, []);

  return (
    <section className="w-full flex flex-col items-center pt-5 min-h-[420px] bg-zinc-300 rounded-lg">
      <h1 className="text-gray-500 text-lg font-bold">Trending Recipes</h1>
      <div className="mt-8 flex gap-3">
        {trending && trending.map(() => {
          <Recipe />
        })}
      </div>
    </section>
  );
}
