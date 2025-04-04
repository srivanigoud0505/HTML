package com.stuGraCal;
import java.util.Scanner;

public class StudentGradeCalculator {
	
	public static float Average(float a, float b, float c) {
		float avg = (a+b+c)/3;
		return avg;
	}
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter Student's Name:");
		String sname =sc.nextLine();
		
		System.out.println("Enter Student's Age:");
		int age =sc.nextInt();
		
		System.out.println("Enter Grade for Math:");
		float mathgrade =sc.nextFloat();
		
		System.out.println("Enter Grade for Science:");
		float scigrade =sc.nextFloat();
		
		System.out.println("Enter Grade for English:");
		float enggrade =sc.nextFloat();
		
		 System.out.println("Student Name:"+sname);
		 System.out.println("Age:"+age);
		 System.out.println("Math Grade:"+mathgrade);
		 System.out.println("Science Grade:"+scigrade);
		 System.out.println("English Grade:"+enggrade);
		float aver = StudentGradeCalculator.Average(mathgrade, scigrade, enggrade);
		System.out.println("Average Grade:"+aver);
		
		if(aver >= 70 ) {
			System.out.println("Grade Classification:First Class");
		}
		else if((aver < 70) && (aver >= 50)){
			System.out.println("Grade Classification:Second Class");
		}
		else {
			System.out.println("Grade Classification:Third Class");
		}
	}

}
