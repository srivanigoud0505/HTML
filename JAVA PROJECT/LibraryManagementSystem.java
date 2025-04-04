package com.librarymansystem;

import java.util.Scanner;

public class LibraryManagementSystem {
  
	int Max_books = 100;
	String bookTitles[] = new String[Max_books];
	String bookAuthors[] = new String[Max_books];
	
	int bookCount = 0;
	
	Scanner sc = new Scanner(System.in);
	
	public static void main(String[] args) {
		LibraryManagementSystem library = new LibraryManagementSystem();
		library.run();
	}
	
	public void run() {
		while(true) {
			System.out.println("\n------------------Library Management System------------------");
			System.out.println("1. Add a New Book");
			System.out.println("2. Search for a Book by Title");
			System.out.println("3. Display All Books");
			System.out.println("4. Remove a Book by Title");
			System.out.println("5. Exit");
			System.out.print("Choose an Option");
			
			int choice = sc.nextInt();
			sc.nextLine();
			
			switch(choice) {
			case 1:
				addBook();
				break;
			case 2:
				searchBook();
				break;
			case 3:
				displayBook();
				break;
			case 4:
				removeBook();
				break;
			case 5:
				System.out.println("Exiting library mangement System...");
				break;
			default:
				System.out.println("Enter a valid option..");
			}
		}
	}
	
	 //addbook function
	
	public void addBook() {
		if(bookCount == Max_books) {
			System.out.println("Library is Full. Cannot add more books.");
			return;
		}
		System.out.println("Enter the Book Title: ");
		String title = sc.nextLine();
		
		System.out.println("Enter the Book Author: ");
		String author = sc.nextLine();
		
		bookTitles[bookCount] = title;
		bookAuthors[bookCount] = author;
		bookCount++;
		System.out.println("Book added Successfully");
	}
	
	//search a book by its title
	
	public void searchBook() {
		if(bookCount == 0) {
			System.out.println("No Books in the Library.");
			return;
		}
		System.out.println("Enter the book title to search:");
		String title = sc.nextLine();
		for(int i=0; i<bookCount; i++) {
			if(bookTitles[i].equalsIgnoreCase(title)) {
				System.out.println("Book Found:");
				System.out.println("Title: "+bookTitles[i]);
				System.out.println("Author: "+bookAuthors[i]);
			}	
		}
	}
	
	//display all the books
	
	public void displayBook(){
		if(bookCount == 0) {
			System.out.println("No Books in the Library.");
			return;
		}
		System.out.println("Books in the Library:");
		for (int i=0; i<bookCount; i++) {
			System.out.println((i+1)+".Title:"+bookTitles[i]+".Author:"+bookAuthors[i]);
		}	
	}
	
	//remove the book by its title
	
	public void removeBook() {
		if(bookCount == 0) {
			System.out.println("No Books in the Library to remove.");
			return;
		}
		System.out.println("Enter the book title to search:");
		String title = sc.nextLine();
		for(int i=0; i<bookCount; i++) {
			if(bookTitles[i].equalsIgnoreCase(title)) {
				for(int j = i;j<bookCount-1; j++ ) {
					bookTitles[j] = bookTitles[j+1];
					bookAuthors[j]=bookAuthors[j+1];
				}
				bookCount--;
				System.out.println("Book Removed Successfully.");
		}
		}
	}
}
