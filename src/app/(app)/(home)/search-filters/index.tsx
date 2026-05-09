import React from "react";
import SearchInput from "./search-input";
import Categories from "./categories";
import { customCategory } from "./types";

interface Props {
  data: customCategory[];
}

export default function SearchFilters({ data }: Props) {
  return (
    <div className="px-4 lg:px-12 py-18 border-b flex flex-col gap-4 w-full">
      <SearchInput data={data} disabled={false} />
      {/* Categories */}
      <div className="hidden lg:block">
        <Categories data={data} />
      </div>
    </div>
  );
}
