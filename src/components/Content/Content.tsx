import { IngredientsQuery } from "./IngredientsQuery";
import { Recommendations } from "./Recommendations";
import { TrendingRecipes } from "./TrendingRecipes";

export function Content() {
  return (
    <div className="flex w-full justify-center gap-12 text-white">
      <main className="flex flex-col gap-5 w-1/2">
        <Recommendations />
        <IngredientsQuery />
      </main>
      <TrendingRecipes />
    </div>
  );
}
