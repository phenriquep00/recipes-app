import { PopularTags } from "./PopularTags";
import { TrendingRecipes } from "./TrendingRecipes";

export function Content() {
  return (
    <div className="flex w-full justify-center gap-12 text-white">
      <main className="flex flex-col gap-5 w-[60%] mb-4">
        <PopularTags />
        <TrendingRecipes />
      </main>
    </div>
  );
}
