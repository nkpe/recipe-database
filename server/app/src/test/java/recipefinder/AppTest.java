/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package recipefinder;
import recipefinder.database.InsertData;
import recipefinder.services.Gemini;
import recipefinder.services.GeminiResult;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
// import static org.junit.jupiter.api.Assertions.*;

class AppTest {
    @Test void testRecipeDataFromJSON() {
        System.out.println("TEST RUNNING: Recipe Data from JSON");
        InsertData.recipeDataFromJSON();
    }

    @Test public void testRecipeAIHelper() {
        System.out.println("TEST RUNNING: AI Helper");
        Gemini gemini = new Gemini();
        GeminiResult result = gemini.recipeAIHelper("https://realfood.tesco.com/recipes/pork-teriyaki-rice-and-broccoli.html");
        System.out.println(result.value);
        assertEquals(true, result.statusOk);
    }
}
