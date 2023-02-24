import { ForkKnife } from "phosphor-react";
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to={"/"} className="flex items-center text-[#4B5563] capitalize text-xl font-thin">
      <ForkKnife size={32} weight="thin" color="#4B5563" /> recipes
    </Link>
  );
}
