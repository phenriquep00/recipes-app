interface IIngredient {
  name: string;
  amount: number;
  unit: string;
}

export function Ingredient({ name, amount, unit }: IIngredient) {
  return (
    <div className="grid grid-cols-2 w-1/2 border-b border-zinc-500 text-zinc-600">
      <p className="font-semibold text-lg">{name}</p>
      <div className="font-thin">
        <span className="font-semibold">{amount}</span> {unit}
      </div>
    </div>
  );
}
