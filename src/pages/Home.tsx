import { Content } from "../components/Content/Content";
import { Header } from "../components/Header/Header";

export function Home() {
  return (
    <main className="flex flex-col items-center min-w-[100vw] min-h-screen gap-10 pb-5 bg-gradient-to-bl from-zinc-100 to-zinc-300">
      <Header />
      <Content />
    </main>
  );
}
