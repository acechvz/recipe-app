import { Button } from "@/ui/Button/Button";

export function SubscribeNow() {
  return (
    <div className="relative mt-16 py-16 bg-primary-3 rounded-4xl text-center text-white overflow-hidden">
      <img className="absolute top-0" src="./assets/ellipse-vector.svg" />
      <img
        className="absolute bottom-0 -scale-[1]"
        src="./assets/ellipse-vector.svg"
      />
      <div className="relative">
        <span className="uppercase text-lg">Subscribe</span>
        <p className="headline-1 my-3">
          Join the fun <br />
          Subscribe now!
        </p>
        <p className="paragraph-1 max-w-2xl mx-auto">
          Subscribe to our newsletter for a weekly serving of recipes, cooking
          tips, and exclusive insights straight to your inbox.
        </p>

        <div className="mt-12 bg-clear inline-flex rounded-4xl py-1.5 px-2 gap-3">
          <input
            className="placeholder:text-dark/40 text-paragraph-1 pl-4 outline-none text-dark/80"
            type="text"
            placeholder="Email Address"
          />
          <Button variant="secondary">Subscribe</Button>
        </div>
      </div>
    </div>
  );
}
