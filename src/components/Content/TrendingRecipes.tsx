import { useEffect } from "react";
import { Recipe } from "../Recipe/Recipe";
import axios from "axios";


export function TrendingRecipes() {
  const getTrendingRecipes = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_SPOONACULAR_REACT_API_KEY}&number=8`
    );
    const data = await api.json();

    console.log(data);
  };

  useEffect(() => {
    getTrendingRecipes();
  }, []);

  return (
    <section className="w-full flex flex-col items-center pt-5 min-h-[420px] bg-zinc-300 rounded-lg">
      <h1 className="text-gray-500 text-lg font-bold">Trending Recipes</h1>
      <div className="mt-8 flex gap-3">
        <Recipe />
        <Recipe />
        <Recipe />
      </div>
    </section>
  );
}
