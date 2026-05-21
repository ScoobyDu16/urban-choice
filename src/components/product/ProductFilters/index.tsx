import { Search } from "lucide-react";
import type { Category } from "../../../types/category.types";

interface ProductFiltersProps {
  query: string;
  onQueryChange: (q: string) => void;
  categorySlug: string | null;
  onCategoryChange: (slug: string | null) => void;
  categories: Category[];
  searchPlaceholder?: string;
}

export default function ProductFilters({
  query,
  onQueryChange,
  categorySlug,
  onCategoryChange,
  categories,
  searchPlaceholder = "Search products...",
}: ProductFiltersProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative mb-6">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />
        <input
          type="text"
          placeholder={searchPlaceholder}
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
      </div>

      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onCategoryChange(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              categorySlug === null
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.slug)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                categorySlug === cat.slug
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
