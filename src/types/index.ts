export type Recipe = {
  name: string;
  instructions: string[];
  prepTimeMinutes: number;
  servings: number;
  difficulty: string;
  image: string;
  tags?: string[];
};
