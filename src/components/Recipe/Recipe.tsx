import { Clock, Image, Star } from "phosphor-react";

export function Recipe() {
  return (
    <div className="w-56 h-56 rounded-lg bg-zinc-300 flex flex-col items-center justify-center shadow-md drop-shadow-2xl">
        {/* Title */}
      <h1 className="font-medium text-lg text-gray-600">Recipe name</h1>

        {/* Central piece (image, rating, time) */}
      <div className="flex pt-3 gap-2">
        <Image size={90} weight="thin" color="black" />
        <div className="flex flex-col justify-center gap-3">
            <div className="flex gap-1">
                <Star size={12} color="black"/>
                <Star size={12} color="black"/>
                <Star size={12} color="black"/>
                <Star size={12} color="black"/>
                <Star size={12} color="black"/>
            </div>
            <div className="text-cyan-600 flex gap-2 items-center">
                <Clock size={24}/> <p>40min</p>
            </div>
        </div>
      </div>

        {/* progress bar */}
        <div className="flex gap-2 pt-3 items-center justify-center text-green-500">
            <div className="border border-green-500 h-full w-28">
                <div className="h-full w-1/2 bg-green-500" />
            </div>
            <p className="leading-tight text-base font-light">
                easy
            </p>
        </div>

    </div>
  );
}
