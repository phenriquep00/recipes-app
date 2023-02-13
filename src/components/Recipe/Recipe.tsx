import { Clock } from "phosphor-react";

interface IRecipe {
  title: string;
  image: string;
  prepTime: string;
}

export function Recipe({ title, image, prepTime }: IRecipe) {
  return (
    <button
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="w-56 h-72 rounded-lg bg-zinc-300 flex flex-col items-center justify-center shadow-md drop-shadow-2xl hover:scale-105 transition-transform ease-in-out z-20"
    >
      <div className="flex bg-white py-1 px-2 rounded-lg border-2 border-gray-500 items-center gap-2 justify-center absolute text-black top-4 right-4">
        <Clock size={24} weight="bold" color={"#6b7280"}/>
        <p className="leading-tight text-gray-500 font-semibold">{prepTime}min</p>
        </div>
      <div className="fixed flex items-center justify-center bottom-0 rounded-b-lg bg-gradient-to-t from-black/50 w-full h-1/2">
        <h3 className="font-semibold text-lg p-1">{title}</h3>
      </div>
    </button>
  );
}
