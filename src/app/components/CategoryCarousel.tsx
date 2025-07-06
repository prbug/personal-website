import React, { useState } from "react";

interface CategoryCarouselProps {
  categories: {
    label: string;
    content: React.ReactNode;
  }[];
  defaultIndex?: number;
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({
  categories,
  defaultIndex = 0,
}) => {
  const [selected, setSelected] = useState(defaultIndex);

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className="flex flex-row gap-4 px-2 py-1 rounded-full border border-white/10 shadow-sm bg-transparent"
        style={{ minHeight: 56 }}
      >
        {categories.map((cat, idx) => (
          <button
            key={cat.label}
            className={`px-7 py-3 rounded-full text-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-400/50
              ${
                selected === idx
                  ? "bg-black text-white border border-white/20 shadow-md"
                  : "bg-transparent text-gray-400 border border-transparent hover:bg-black/10"
              }
            `}
            onClick={() => setSelected(idx)}
            aria-pressed={selected === idx}
            tabIndex={0}
            style={{ minWidth: 120 }}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="w-full mt-6">{categories[selected]?.content}</div>
    </div>
  );
};

export default CategoryCarousel;
