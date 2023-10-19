import java.util.Scanner;

public class Pangram {
    public static void checkAndPrintPangram(String str) {
        str = str.replaceAll(" ", "").toLowerCase();
        String s = "";

        for (char i = 'a'; i <= 'z'; i++) {
            if (str.indexOf(i) != -1) {
                s = s + i;
            }
        }

        if (s.length() == 26) {
            System.out.println("Pangram");
        } else {
            System.out.println("Not a Pangram");
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter Your String:");

        String str = sc.nextLine();
        checkAndPrintPangram(str);
    }

    
}
