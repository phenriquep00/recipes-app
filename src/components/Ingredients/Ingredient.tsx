interface IIngredient {
    name: string;
    amount: number;
    unit: string;

}

export function Ingredient({name, amount, unit}: IIngredient) {
    return (
        <div className="flex flex-row items-center gap-10">
            <p>{name}</p>
            <p>{amount} {unit}</p>
        </div>
    )
}