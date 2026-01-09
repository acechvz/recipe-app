import { RecipesCarousel } from "../../components/RecipesCarousel";

export function FeaturedRecipes() {
  return (
    <RecipesCarousel
      title="Featured recipes"
      recipes={[
        {
          name: "Classic Margherita Pizza",
          image: "https://cdn.dummyjson.com/recipe-images/1.webp",
          difficulty: "Medium",
          instructions: [
            "Preheat the oven to 475°F (245°C).",
            "Roll out the pizza dough and spread tomato sauce evenly.",
            "Top with slices of fresh mozzarella and fresh basil leaves.",
            "Drizzle with olive oil and season with salt and pepper.",
            "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
            "Slice and serve hot.",
          ],
          prepTimeMinutes: 20,
          servings: 3,
          tags: ["Vegetarian"],
        },
        {
          name: "Veggie Bowl",
          image: "https://cdn.dummyjson.com/recipe-images/2.webp",
          instructions: [
            "Dive into the velvety indulgence of our Decadent Chocolate Mousse.",
            "A dessert that transcends sweetness!",
          ],
          difficulty: "Easy",
          prepTimeMinutes: 30,
          servings: 4,
        },
      ]}
    />
  );
}
