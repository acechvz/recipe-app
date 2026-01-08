import { RecipeCard } from "../../components/RecipeCard";

export function FeaturedRecipes() {
  return (
    <div className="border rounded-4xl border-black/25 p-4 pt-10 mb-40">
      <div className="flex items-center justify-between">
        <h3 className="pl-6 text-header-2 font-bold font-montserrat uppercase tracking-wide mb-10">
          Featured Recipes
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
        {/* Card 1 */}
        <RecipeCard
          name="Classic Margherita Pizza"
          image="https://cdn.dummyjson.com/recipe-images/1.webp"
          difficulty="Medium"
          instructions={[
            "Preheat the oven to 475°F (245°C).",
            "Roll out the pizza dough and spread tomato sauce evenly.",
            "Top with slices of fresh mozzarella and fresh basil leaves.",
            "Drizzle with olive oil and season with salt and pepper.",
            "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
            "Slice and serve hot.",
          ]}
          prepTimeMinutes={20}
          servings={3}
        />
        {/* Card 2 */}
        <RecipeCard
          name="Veggie Bowl"
          image="https://cdn.dummyjson.com/recipe-images/2.webp"
          instructions={[
            "Dive into the velvety indulgence of our Decadent Chocolate Mousse.",
            "A dessert that transcends sweetness!",
          ]}
          difficulty="Easy"
          prepTimeMinutes={30}
          servings={4}
        />
      </div>
    </div>
  );
}
