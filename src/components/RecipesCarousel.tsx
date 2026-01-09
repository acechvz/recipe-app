import type { Recipe } from "../types";
import { RecipeCard } from "./RecipeCard";

interface RecipesCarouselProps {
  title: string;
  recipes: Recipe[];
}

export function RecipesCarousel({ title, recipes }: RecipesCarouselProps) {
  return (
    <div className="max-w-7xl mx-auto border rounded-4xl border-black/25 p-4 pt-10 mb-40">
      <div className="flex items-center justify-between">
        <h3 className="pl-6 text-header-2 font-bold font-montserrat uppercase tracking-wide mb-10">
          {title}
        </h3>
        <div className="inline-flex gap-1">
          <button className="cursor-pointer opacity-25">
            <img
              className="-scale-[1]"
              src="/assets/icons/arrow-right-icon.svg"
            />
          </button>
          <button className="cursor-pointer">
            <img src="/assets/icons/arrow-right-icon.svg" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.name} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
