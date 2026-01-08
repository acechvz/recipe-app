import { Button } from "../ui/Button/Button";

interface RecipeCardProps {
  name: string;
  instructions: string[];
  prepTimeMinutes: number;
  servings: number;
  difficulty: string;
  image: string;
}

export function RecipeCard({
  name,
  instructions = [],
  prepTimeMinutes,
  servings,
  difficulty,
  image,
}: RecipeCardProps) {
  return (
    <div className="flex flex-col rounded-4xl overflow-hidden bg-light border border-black/15">
      <img
        className="h-56 w-full object-cover object-center"
        src={image}
        alt=""
      />
      <div className="p-6 pb-4 flex flex-col grow">
        <div className="grow ">
          <h4 className="text-2xl font-montserrat font-bold mb-3">{name}</h4>
          <p className="font-light line-clamp-2">{instructions.join(" ")}</p>
        </div>
        <div className="justify-self-end mt-10 flex items-center gap-3">
          <span className="text-sm font-medium uppercase grow ">
            {prepTimeMinutes} Min - {difficulty} prep - {servings} serves
          </span>
          <Button>View Recipe</Button>
        </div>
      </div>
    </div>
  );
}
