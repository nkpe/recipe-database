package recipefinder;

import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import javax.print.Doc;

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

// Manage DB & Client
public class Database {
    private MongoDatabase database;
    private MongoClient mongoClient;
    private MongoCollection<Document> recipeJSON;

    public Database() {

    }

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
        if(mongoClient == null || database == null){
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

    public void queryIngredients() {
        System.out.println("QUERY INGREDIENTS INIT");
        if(mongoClient == null || database == null) {
            System.out.println("Database not connected");
            return;
        }
        

        FindIterable<Document> results = recipeJSON.find(eq("ingredients", "chicken"));

        MongoCursor<Document> cursor = results.iterator();

        if (cursor.hasNext()) {
            Document document = cursor.next();
            Set<Entry<String, Object>> entrySet = document.entrySet();
            // entry.forEach((key, value) -> System.out.println(key + " : " + value));

            entrySet.forEach((entry) -> {
                System.out.println("ENTRIES" + entry.getKey() + " : " + entry.getValue().toString());
            });

            // return entry;
        } else {
            // return null;
            System.out.println("NO ENTRIES");
        }

    }

}
