import { Recipe } from "../Recipe/Recipe";

export function TrendingRecipes() {
  return (
    <section className="w-full flex flex-col items-center pt-5 min-h-[420px] bg-zinc-300 rounded-lg">
      <h1 className="text-gray-500 text-lg font-bold">
        Trending Recipes
      </h1>
      <div className="mt-8 flex gap-3">
        <Recipe />
        <Recipe />
        <Recipe />
        
      </div>
    </section>
  );
}
