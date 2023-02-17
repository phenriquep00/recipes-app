import { useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { useEffect, useState } from "react";

import slugify from "slugify";
import { fetchSingleRecipe } from "../utils/fetchSingleRecipe";

export function RecipeDescription() {
    const { id } = useParams<{ id: string }>();
    const [recipe, setRecipe] = useState<any | null>(null);

  useEffect(() => {
    async function getRecipe() {
      try {
        const data = await fetchSingleRecipe(parseInt(id!));
        setRecipe(data);
      } catch (error) {
        console.error(error);
      }
    }
    getRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }
  return (
    <main className="flex flex-col items-center min-w-[100vw] min-h-screen gap-10 pb-5 bg-gradient-to-bl from-zinc-100 to-zinc-300">
      <Header />
      <h1 className="text-black ">{recipe.title}</h1>
      <p>{recipe.summary}</p>
      <img src={recipe.image} alt="" />
    </main>
  );
}
