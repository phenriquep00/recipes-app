import { useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";

export function RecipeDescription() {
    const {recipeTitle} = useParams()

  return (
    <main className="flex flex-col items-center min-w-[100vw] min-h-screen gap-10 pb-5 bg-gradient-to-bl from-zinc-100 to-zinc-300">
      <Header />
      <h1 className="text-black ">{recipeTitle}</h1>
    </main>
  );
}
