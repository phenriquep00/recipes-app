import { PropsWithChildren } from "react";

type TTagButton = PropsWithChildren <{
    color: string;
}>

export function TagButton({ color, children }: TTagButton) {
  return (
    <button
      style={{ backgroundColor: color }}
      className="flex items-center gap-2 text-lg font-bold text-white rounded h-10 bg-black py-2 px-3 hover:ring-2 ring-white hover:ring-offset-2 ring-offset-zinc-300 transition-all ease-in-out"
    >
        {children}
    </button>
  );
}
