import { Content } from "../components/Content/Content";
import { Header } from "../components/Header/Header";

export function Home() {
  return (
    <main className="flex flex-col items-center w-screen gap-16 pb-5 bg-slate-100">
      <Header />
      <Content />
    </main>
  );
}
