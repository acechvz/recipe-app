import { useRef } from "react";

import { Swiper, SwiperSlide, type SwiperClass } from "swiper/react";
import { Navigation } from "swiper/modules";

import type { Recipe } from "@/types/app";
import { RecipeCard } from "@/components/RecipeCard/RecipeCard";
import { RecipeCardSkeleton } from "@/components//RecipeCard/RecipeCardSkeleton";

import "swiper/swiper.css";

interface RecipesCarouselProps {
  title: string;
  recipes: Recipe[];
  isLoading?: boolean;
}

export function RecipesCarousel({
  title,
  recipes,
  isLoading,
}: RecipesCarouselProps) {
  const swiperRef = useRef<SwiperClass | null>(null);

  const classes = {
    navButton: "cursor-pointer transition",
  };

  const prevButton = (
    <button id="prevSlide" className={classes.navButton}>
      <img className="-scale-[1]" src="/assets/icons/arrow-right-icon.svg" />
    </button>
  );

  const nextButton = (
    <button id="nextSlide" className={classes.navButton}>
      <img src="/assets/icons/arrow-right-icon.svg" />
    </button>
  );

  return (
    <div className="w-full max-w-7xl mx-auto border rounded-4xl border-black/25 p-4 pt-10">
      <div className="flex items-center justify-between mb-10">
        <h2 className="pl-6 header-2 tracking-wide">{title}</h2>
        <div className="inline-flex gap-1">
          {prevButton}
          {nextButton}
        </div>
      </div>
      {isLoading ? (
        <div className="grid grid-cols-2 gap-4">
          <RecipeCardSkeleton />
          <RecipeCardSkeleton />
        </div>
      ) : (
        <Swiper
          modules={[Navigation]}
          slidesPerView={2}
          spaceBetween={16}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          navigation={{
            nextEl: "#nextSlide",
            prevEl: "#prevSlide",
            disabledClass: "opacity-25",
          }}
        >
          {recipes.map((recipe) => (
            <SwiperSlide key={recipe.name}>
              <RecipeCard recipe={recipe} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
