/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package recipefinder;

public class App {
    public static void main(String[] args) {
        Database database = new Database();
        database.connect();
        // !!! Insert Data will should only be run once to populate JSON in DB !!!
        // database.insertData();
        database.queryIngredients("chicken");
    
        // InsertData is commented out to stop duplicate recipes from recipes.json
        // InsertData.insertData();
        System.out.println(new App());
    }
}
