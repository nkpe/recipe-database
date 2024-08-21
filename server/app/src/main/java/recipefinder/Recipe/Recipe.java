package recipefinder.Recipe;

public class Recipe {
    String recipeTitle;
    String ingredients;
    String totalTime;
    String prepTime;

   public Recipe(String recipeTitle, String ingredients, String totalTime, String prepTime){
    this.recipeTitle = recipeTitle;
    this.ingredients = ingredients;
    this.totalTime = totalTime;
    this.prepTime = prepTime;
   }

   public String toString() {
    String recipeString = "Recipe: " + recipeTitle + ".\nIngredients: " + ingredients + ".\nTotal Time: " + totalTime + ".\nPrep Time: " + prepTime + ".";
    return recipeString;
   }
}