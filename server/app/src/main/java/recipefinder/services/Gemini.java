package recipefinder.services;
import java.io.BufferedReader;
import java.io.InputStreamReader;
// import recipefinder.services.GeminiResult;
public class Gemini {
    public GeminiResult recipeAIHelper (String prompt) {
        boolean statusOk = true;
        String result = "";
        try {
            String pythonFilePath = "../python-gemini/gemini.py";
            String argumentPrompt = prompt;
            
            ProcessBuilder processBuilder = new ProcessBuilder("python3", pythonFilePath, argumentPrompt);
            Process process = processBuilder.start();
            
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line;

            while ((line = reader.readLine()) != null) {
                System.out.println("Output form Python Script: " + line);
                // !!!! reader.readLined() return multiple strings that are needed. Result needs to append these all to a string or list to keep them. 
                result = result.concat(" " +  line);
            }
            
            BufferedReader errorReader = new BufferedReader(new InputStreamReader(process.getErrorStream()));
            while ((line = errorReader.readLine()) != null) {
                System.err.println("Error from Python script: " + line);
                result = line;
                statusOk = false;
            }
            
            int exitCode = process.waitFor();
            System.out.println("Python script exited with code: " + exitCode);
        } catch (Exception e){
            e.printStackTrace();
            result = e.getMessage();
            statusOk = false;
        };
        GeminiResult geminiResult = new GeminiResult(statusOk, result);
        return geminiResult;
    };
}