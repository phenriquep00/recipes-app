import { colors } from "../../utils/colors";
import { TagButton } from "../Buttons/TagButton";

export function PopularTags() {
  return (
    <section className="w-full flex flex-col items-center pt-5 min-h-[25%] bg-zinc-300 rounded-lg">
      <h1 className="font-semibold text-gray-500 text-2lg">Popular Tags</h1>

      <div className="flex w-full gap-2 items-center justify-center mt-5 mb-5 flex-wrap">
        <TagButton color={colors.red}>Italian</TagButton>
        <TagButton color={colors.orange}>Vegan</TagButton>
        <TagButton color={colors.amber}>Vegetarian</TagButton>
        <TagButton color={colors.yellow}>Japonese</TagButton>
        <TagButton color={colors.yellow}>Dairy-Free</TagButton>

        <TagButton color={colors.lime}>Low-carb</TagButton>
        <TagButton color={colors.green}>Desert</TagButton>
      </div>
    </section>
  );
}
