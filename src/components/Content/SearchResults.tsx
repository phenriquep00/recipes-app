export function SearchResults() {
  return (
    <section className="w-[60%] flex flex-col items-center pt-5 min-h-[420px] bg-zinc-300 rounded-lg transition-all ease-in-out">
      <h1 className="text-gray-500 text-lg font-bold">Results for: RECIPE NAME</h1>
      {/* TODO: add the carousel here:  */}
      <div className="mt-8 pl-4 flex w-full h-full pt-4 gap-3 text-white overflow-x-scroll"></div>
    </section>
  );
}
