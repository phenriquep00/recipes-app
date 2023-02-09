import { Recipe } from "../Recipe/Recipe";

export function TrendingRecipes() {
  return (
    <aside className="w-60 bg-zinc-500 rounded-lg flex pt-5 flex-col items-center ">
      <h1 className="text-gray-100 font-semibold text-base pb-5">
        Trending recipes
      </h1>
      <ul className="flex flex-col gap-2 overflow-hidden max-h-[1000px]">
        <li>
          <Recipe />
        </li>
        <li>
          <Recipe />
        </li>
        <li>
          <Recipe />
        </li>
        <li>
          <Recipe />
        </li>
        <li>
          <Recipe />
        </li>
      </ul>
    </aside>
  );
}
