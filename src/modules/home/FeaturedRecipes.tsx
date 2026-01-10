import { useEffect, useState } from "react";

import { RecipesCarousel } from "@/components/RecipesCarousel";
import { featuredRecipesMock } from "@/modules/home/constants";

export function FeaturedRecipes() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <RecipesCarousel
      isLoading={loading}
      title="Featured recipes"
      recipes={[...featuredRecipesMock, ...featuredRecipesMock]}
    />
  );
}
