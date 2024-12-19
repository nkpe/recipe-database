package recipefinder.services;

public class GeminiResult {
    public final boolean statusOk; 
    public final  String value;

    public GeminiResult(boolean statusOk, String value){
        this.statusOk = statusOk;
        this.value = value;
    }
}
