package recipefinder;

import java.util.Scanner;

public class UserInput {

    public String userInput(String inputDescription) {
        System.out.println(inputDescription);
        Scanner scanner = new Scanner(System.in);
        // scanner.nextLine();
        String input = scanner.nextLine();
        // String input = readUserInput(scanner);
        scanner.close();
        return input;
    }

}
