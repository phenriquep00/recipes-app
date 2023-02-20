import { useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { useEffect, useState } from "react";

import sanitizeHtml from "sanitize-html";
import { fetchSingleRecipe } from "../utils/fetchSingleRecipe";
import { Loading } from "../components/Loading/Loading";

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
    return <Loading />;
  }
  return (
    <main className="flex flex-col items-center min-w-[100vw] min-h-screen gap-10 pb-5 bg-gradient-to-bl from-zinc-100 to-zinc-300">
      <Header />
      <h1 className="text-black font-bold text-xl">{recipe.title}</h1>
      {/* General Description */}
      <div className="flex gap-4 w-[85%] items-center justify-center">
        <img
          className="rounded-2xl shadow-2xl drop-shadow"
          src={recipe.image}
          alt={recipe.title}
        />
        <div className="bg-zinc-300 p-4 rounded-xl text-gray-700 font-medium text-lg">
          <p>
            {sanitizeHtml(recipe.summary, {
              allowedTags: [],
              allowedAttributes: {},
            })}
          </p>
        </div>
      </div>
      {/* --------------------------------------------------------------------------- */}
      {/* Ingredients */}
      {/* --------------------------------------------------------------------------- */}
      {/* Preparation */}
      {/* --------------------------------------------------------------------------- */}
      {/* Suggested recipes */}
      {/* --------------------------------------------------------------------------- */}
    </main>
  );
}
