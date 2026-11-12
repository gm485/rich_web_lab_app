import RecipeFormToggle from "@/components/recipe/RecipeFormToggle";

export default function Page() {
  return (
    <section className="recipePage" aria-labelledby="recipe-title">
      <p className="eyebrow">RECIPES</p>
      <h1 id="recipe-title">Share a recipe</h1>
      <p className="description">Add a recipe with its ingredients and method.</p>
      <RecipeFormToggle />
    </section>
  );
}
