import { RecipeCard } from "@/components/RecipeCard/RecipeCard";
import { Badge } from "@/ui/Badge/Badge";
import { Button } from "@/ui/Button/Button";
import { featuredRecipesMock } from "@/modules/home/constants";
import { useState } from "react";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

const RecipeFilters = {
  all: "All",
  vegan: "Vegan",
  lunch: "Lunch",
  dinner: "Dinner",
  breakfast: "Breakfast",
  dessert: "Dessert",
  quick_bite: "Quick bite!",
} as const;

export function EmbarkOnJourney() {
  const [selectedFilter, setSelectedFilter] = useState<string>(
    RecipeFilters.all
  );
  const classes = {
    filterButton: (isActive: boolean) =>
      classNames("transition", {
        "opacity-40": !isActive,
      }),
  };

  return (
    <div className="max-w-7xl mx-auto w-full mt-21">
      <div className="max-w-md w-full text-center mx-auto">
        <Badge label="Recipes" />
        <h2 className="header-2 mt-2 mb-3">Embark on a journey</h2>
        <p className="paragraph-2">
          With our diverse collection of recipes we have something to satisfy
          every palate.
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 my-10 flex-wrap">
        {Object.entries(RecipeFilters).map(([filterKey, label]) => (
          <Button
            key={filterKey}
            className={twMerge(
              classes.filterButton(label === selectedFilter),
              classNames({
                "bg-primary-1 opacity-100": label === RecipeFilters.all,
              })
            )}
            onClick={() => setSelectedFilter(label)}
          >
            {label}
          </Button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <RecipeCard key={index} recipe={featuredRecipesMock[0]} />
          ))}
      </div>
    </div>
  );
}
