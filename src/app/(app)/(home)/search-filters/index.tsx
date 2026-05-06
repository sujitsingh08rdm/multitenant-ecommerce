import React from "react";
import SearchInput from "./search-input";
import Categories from "./categories";

interface Props {
  data: any;
}

export default function SearchFilters({ data }: Props) {
  return (
    <div className="px-4 lg:px-12 py-18 border-b flex flex-col gap-4 w-full">
      <SearchInput disabled={false} />
      {/* Categories */}
      <Categories data={data} />
    </div>
  );
}
