
import java.util.Scanner;
import java.util.HashMap;

public class RomanNum {
     public static int romanNum(String s) {
      
        HashMap<Character, Integer> romanVal = new HashMap<>();
        romanVal.put('I', 1);
        romanVal.put('V', 5);
        romanVal.put('X', 10);
        romanVal.put('L', 50);
        romanVal.put('C', 100);
        romanVal.put('D', 500);
        romanVal.put('M', 1000);

        int result = 0;
        int previousValue = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            char ch = s.charAt(i);
            int currentValue = romanVal.get(ch);

            if (currentValue < previousValue) {
                result -= currentValue;
            } else {
                result += currentValue;
            }

            previousValue = currentValue;
        }

        return result;
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a Roman numeral: ");
        String roman = scanner.nextLine();
        scanner.close();

        int result = romanNum(roman);
        System.out.println(roman + " = " + result);
    }

   
}

