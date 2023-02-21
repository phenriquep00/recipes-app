import { Ingredient } from "./Ingredient";

interface IIngredientSection {
    ingredients: any
}

export function IngredientSection({ingredients}: IIngredientSection) {
    return (
        <div className="bg-zinc-300 w-[85%] p-4 flex flex-col items-center gap-3 rounded-xl">
        <h2 className="font-bold text-xl text-zinc-700 mb-3">Ingredients</h2>
        {ingredients !== null &&
          ingredients.map((ingredient: any) => {
            return (
              <Ingredient
                key={ingredient.id}
                name={ingredient.nameClean}
                amount={ingredient.amount}
                unit={ingredient.unit}
              />
            );
          })}
      </div>

    )
}