package recipefinder.database;

import java.util.HashMap;
import java.util.List;
import java.util.Map.Entry;
import java.util.Set;

import org.bson.Document;

import static com.mongodb.client.model.Filters.eq;
import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.MongoException;
import com.mongodb.ServerApi;
import com.mongodb.ServerApiVersion;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.result.InsertManyResult;

import io.github.cdimascio.dotenv.Dotenv;
import recipefinder.Recipe.Recipe;

// Manage DB & Client
public class Database {
    private MongoDatabase database;
    private MongoClient mongoClient;
    private MongoCollection<Document> recipeJSON;

    public void connect() {
        Dotenv dotenv = Dotenv.load();
        String uri = dotenv.get("MONGODB_URI");

        // Construct a ServerApi instance using the ServerApi.builder() method
        ServerApi serverApi = ServerApi.builder().version(ServerApiVersion.V1).build();
        MongoClientSettings settings = MongoClientSettings.builder().applyConnectionString(new ConnectionString(uri))
                .serverApi(serverApi).build();

        try {
            mongoClient = MongoClients.create(settings);
            database = mongoClient.getDatabase("recipes");
            recipeJSON = database.getCollection("recipeJSON");
            System.out.println("DATABASE CONNECT: " + database);
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public void insertData() {
        if (mongoClient == null || database == null) {
            System.out.println("Database not connected");
            return;
        }

        List<Document> recipesList = InsertData.recipeDataFromJSON();

        try {
            InsertManyResult result = recipeJSON.insertMany(recipesList);
            System.out.println(result);
        } catch (MongoException me) {
            System.out.println("Unable to insert due to an error: " + me);
        }
    }

    private <T> MongoCursor<Document> queryDataBaseGeneric(String fieldName, T value) {
        if (mongoClient == null || database == null) {
            System.out.println("Database not connected");
            return null;
        }

        FindIterable<Document> results = recipeJSON.find(eq(fieldName, value));

        MongoCursor<Document> cursor = results.iterator();

        return cursor;
    }

    private MongoCursor<Document> queryDataBase(String fieldName, String value) {
        return queryDataBaseGeneric(fieldName, value);
    }

    private MongoCursor<Document> queryDataBase(String fieldName, int value) {
        return queryDataBaseGeneric(fieldName, value);
    }

    public void queryByIngredient(String ingredient) {
        MongoCursor<Document> cursor = queryDataBase("ingredients", ingredient);

        if (cursor.hasNext()) {
            Document document = cursor.next();
            Set<Entry<String, Object>> entrySet = document.entrySet();
            HashMap<String, Object> recipesReturned = new HashMap<String, Object>();

            System.out.println("Here is matching recipes: ");

            // covert from Entry Set to Map
            entrySet.forEach((entry) -> {
                recipesReturned.put(entry.getKey(), entry.getValue());
            });
            
            Recipe recipe = convertToRecipeClass(recipesReturned);
            System.out.println(recipe.toString());
        } else {
            System.out.println("NO ENTRIES");
        }

    }

    private Recipe convertToRecipeClass (HashMap<String, Object> recipesReturned) {
        String recipeTitle = recipesReturned.get("recipe-title").toString();
        String ingredients = recipesReturned.get("ingredients").toString();
        String totalTime = recipesReturned.get("total-time").toString();
        String prepTime = recipesReturned.get("prep-time").toString();
        Recipe r = new Recipe(recipeTitle, ingredients, totalTime, prepTime);
        return r;
    }
}
