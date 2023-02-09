import { PopularTags } from "./PopularTags";
import { TrendingRecipes } from "./TrendingRecipes";

export function Content() {
  return (
    <div className="flex w-full justify-center gap-12 text-white">
      <main className="flex flex-col gap-5 w-1/2">
        <PopularTags />
        <TrendingRecipes />
      </main>
    </div>
  );
}
