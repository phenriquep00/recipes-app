import { Recipe } from "../Recipe/Recipe";

export function Recommendations() {
  return (
    <section className="w-full flex flex-col items-center pt-5 min-h-[420px] rounded-lg">
      <h1 className="font-bold text-gray-600 text-2xl">
        Today's recommendations
      </h1>

      <div className="flex gap-4 mt-8">
        <Recipe />
        <Recipe />
        <Recipe />
      </div>
    </section>
  );
}
