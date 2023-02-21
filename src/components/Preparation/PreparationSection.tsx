interface IPreparation {
    preparationMethod: any;
}

export function PreparationSection({preparationMethod}: IPreparation) {
    return (
        <div className="bg-zinc-300 text-gray-700 w-[85%] p-4 flex flex-col rounded-xl">
        <h2 className="self-center font-bold text-xl text-zinc-700 mb-3">
          Preparation
        </h2>
        <ul className="list-decimal flex flex-col ml-16 gap-3 font-medium text-lg">
          {preparationMethod && preparationMethod.map((step: any) => {
            return (
              <li>
                {step}
              </li>
            )
          })}
        </ul>
          
      </div>
    )
}