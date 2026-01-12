import type { Recipe } from "@/types/app";
import { Button } from "@/ui/Button/Button";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const {
    name,
    instructions = [],
    prepTimeMinutes,
    servings,
    difficulty,
    image,
    tags = [],
  } = recipe;
  const isVegan = tags.includes("Vegetarian");

  return (
    <div className="flex flex-col rounded-4xl overflow-hidden bg-light border border-black/15">
      <div className="relative">
        <img
          className="h-56 w-full object-cover object-center"
          src={image}
          alt=""
        />
        {isVegan ? (
          <img
            className="absolute -bottom-4 right-6"
            src="/assets/icons/vegan-tag-icon.svg"
          />
        ) : null}
      </div>
      <div className="p-6 pb-4 flex flex-col grow">
        <div className="grow ">
          <h4 className="text-2xl font-montserrat font-bold mb-3">{name}</h4>
          <p className="font-light line-clamp-2">{instructions.join(" ")}</p>
        </div>
        <div className="justify-self-end mt-10 flex items-center gap-3">
          <span className="text-xs font-medium uppercase grow ">
            {prepTimeMinutes} Min - {difficulty} prep - {servings} serves
          </span>
          <Button>View Recipe</Button>
        </div>
      </div>
    </div>
  );
}
