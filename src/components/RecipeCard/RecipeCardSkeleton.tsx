import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export const RecipeCardSkeleton = () => {
  const classes = {
    shimmer: "animate-pulse bg-slate-400 rounded-3xl",
  };

  return (
    <div className="flex flex-col rounded-4xl overflow-hidden border border-black/15">
      <div
        className={twMerge("h-56 w-full", classes.shimmer, "rounded-none")}
      />
      <div className="p-6 pb-4 flex flex-col grow">
        <div className="grow">
          <div className={classNames("h-8 w-40 mb-5", classes.shimmer)} />
          <div className={classNames("h-3 mb-2", classes.shimmer)} />
          <div className={classNames("h-3", classes.shimmer)} />
        </div>
        <div className="justify-self-end mt-10 flex items-center gap-3">
          <div className="grow">
            <div className={classNames("h-4 w-48", classes.shimmer)} />
          </div>
          <div
            className={classNames("h-11.5 w-33 rounded-4xl", classes.shimmer)}
          />
        </div>
      </div>
    </div>
  );
};
