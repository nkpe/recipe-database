package recipefinder;

import io.github.cdimascio.dotenv.Dotenv;
import io.github.cdimascio.dotenv.DotenvException;

import org.bson.Document;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import static com.mongodb.client.model.Filters.eq;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.List;
import java.io.IOException;
import java.util.ArrayList;

import javax.swing.event.DocumentEvent;
import javax.swing.text.html.StyleSheet;
import javax.swing.text.html.HTMLDocument.Iterator;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.result.InsertManyResult;
import com.mongodb.MongoException;

public class InsertData {
    // public static void insertData() {
    //     Dotenv dotenv = Dotenv.load();
    //     String uri = dotenv.get("MONGODB_URI");

    //     try (MongoClient mongoClient = MongoClient.create(uri)) {
    //         MongoDatabase database = mongoClient.getDatabase("recipes");
    //         MongoCollection <Document> collection = database.getCollection("recipeJSON");
            
    //         List <Document> recipesList = recipeDataFromJSON();

    //         try {
    //             InsertManyResult result = collection.insertMany(recipesList);
    //         } catch (MongoException me) {
    //             System.println("Unable to insert due to an error: " + me);
    //         }

    //         // Document document = collection.find(eq())
    //     }
    // }

    // should return List<Document>
    static void recipeDataFromJSON () {
        JSONParser parser = new JSONParser();

        try { 
            JSONArray obj = (JSONArray) parser.parse(new FileReader("/Users/naomi/Documents/github-repos/personal-repos/recipe-database/app/src/main/resources/data/recipes.json"));


            System.out.println("JSON Object: " + obj);

            List<Document> recipesDocList = new ArrayList<Document>();
            Document doc = new Document();

            for (int i=0 ; i < obj.size(); i++){
                JSONObject recipe = (JSONObject) obj.get(i);

                for(Object key : recipe.keySet()){
                    Object value = recipe.get(key);
                    // System.out.println("key: " + key + ", value: " + value);
                    String keyStr = String.valueOf(key);
                    doc.append(keyStr, value);
                }
                recipesDocList.add(doc);
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }
}
