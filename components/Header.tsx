"use client";

interface Props {
  query: string;
  setQuery: (value: string) => void;
}

export default function Header({ query, setQuery }: Props) {
  return (
    <header className="fixed top-2 right-0 left-0 m-auto max-w-[1800px] w-full h-[52px] px-4 py-3 border-b border-gray-200 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-t-lg">
      <h1 className="text-xl font-semibold text-gray-800">Animal Finder</h1>

      <div className="relative w-full sm:w-80">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search"
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
        />
      </div>
    </header>
  );
}
