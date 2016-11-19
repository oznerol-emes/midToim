           
 Random randomGen = new Random();
 String name;
 	int pick;
	int randInt;
	int randInt2;
	int randInt3;
	int randInt4;
	int randInt5;
	int total;
	int bet = 0;
	int bet2 = 0;
	int gameBankStart = 50;
	int gameBank = 0;
	
        int betTotal;
	int card1;
	int card2;
	int card3;
	int card4;
	int card5;
	int cardTotal1;
	int cardTotal2;
	int grandTotal = 5;
	int winner = 0;
	int lose = 0;
	int tally1;
	int tally2;
        int leave;
	tally1 = grandTotal;
    tally2 = gameBank;
    
	 try {
           Thread.sleep(800);
         } catch 
           (InterruptedException e) {
             return;
           }
          System.out.print(" "); 
          
	 	System.out.print("Switching to Covert Mode");
		 try {
           Thread.sleep(500);
         } catch 
           (InterruptedException e) {
             return;
           }
          System.out.print("."); 
			try {
              Thread.sleep(600);
         	} catch 
           (InterruptedException e) {
             return;
           }
          System.out.print("."); 
          	try {
           Thread.sleep(400);
         } catch 
           (InterruptedException e) {
             return;
           }
          System.out.print("."); 
          try {
           Thread.sleep(1000);
         } catch 
           (InterruptedException e) {
             return;
           }
          System.out.print("."); 
          try {
           Thread.sleep(800);
         } catch 
           (InterruptedException e) {
             return;
           }
          System.out.println("."); 
	
// System Loading Start
	System.out.print("L");
		 try {
           Thread.sleep(500);
         } catch 
           (InterruptedException e) {
            	// Delay
             return;
           }
          System.out.print("o"); 
			try {
              Thread.sleep(600);
         	} catch 
           (InterruptedException e) {
            	// Delay
             return;
           }
          System.out.print("a"); 
          	try {
           Thread.sleep(400);
         } catch 
           (InterruptedException e) {
            	// Delay
             return;
           }
          System.out.print("d"); 
          try {
           Thread.sleep(1000);
         } catch 
           (InterruptedException e) {
            	// Delay
             return;
           }
          System.out.print("i"); 
          try {
           Thread.sleep(800);
         } catch 
           (InterruptedException e) {
            	// Delay
             return;
           }
          System.out.print("n"); 
		 
		  try {
           Thread.sleep(800);
         } catch 
           (InterruptedException e) {
            	// Delay.
             return;
           }
          System.out.println("g"); 
// System Loading End	
        
         System.out.print("Please type in your first name:  ");	
		   name = (stdin.readLine()) ;
  

	do { 
			System.out.println("\nEnter 1 for BlackJack or 3 for Pick3, 5 for Pick5");
			System.out.println("0 to Exit");
			pick = Integer.parseInt(stdin.readLine());

		if (pick == 1) { // open
	     
	      System.out.println("Welcome to Blackjack:  Anti-Violence Ed. v.3.Oh");
	        try {
              Thread.sleep(1000);
          } catch 
              (InterruptedException e) {
            	// Delay
             return;
           }
	
    // blkjck open
     
     
     
	 	do {	
		 	System.out.print("Please enter your Bet " + name + " $(1-5): $");
		   	 	// the nextInt() method scans the next int value
            Scanner scannerIn = new Scanner(System.in); 
            bet = scannerIn.nextInt();
		 }	while (bet < 0 || bet > 5);  
		 
		 	
			 try {
           Thread.sleep(1000);
         } catch 
           (InterruptedException e) {
            	// Delay
             return;
           }
       
	
	System.out.println(" ");
	 //Random randomGen = new Random();
	
// Divider	 
    
     randInt = randomGen.nextInt(11);	
	 card1 = randInt;  
	  System.out.println("Your First Card - " + card1);
	  	 try {
           Thread.sleep(1000);
         } catch 
           (InterruptedException e) {
            	// Delay
             return;
           }
    
      System.out.println(" ");     
    
// Divider
    
     randInt2 = randomGen.nextInt(11);      
	 card2 = randInt2;  
	 System.out.print("DEALER CARD UP - " + card2);
		 try {
           Thread.sleep(1500);
         } catch 
           (InterruptedException e) {
            	// Delay
             return;
           }
      
      
      System.out.println(" ");
      System.out.println(" ");       
     
// Divider  
      
     randInt3 = randomGen.nextInt(11);	
	 card3 = randInt3;  
	 cardTotal1 = card1 + card3;
	  System.out.println("Your Second Card - " + card3);
	  	 try {
           Thread.sleep(1000);
         } catch 
           (InterruptedException e) {
            	// Delay
             return;
           }
      System.out.println(" ");     
      System.out.println("Your Hand - " + cardTotal1);
      System.out.println("Current Bet $" + bet); 
           
          do {	
		 	System.out.print("Please enter your Bet " + name + " $(0-5): $");
		   	 	// the nextInt() method scans the next int value
            Scanner scannerIn = new Scanner(System.in);
            bet2 = scannerIn.nextInt();
            
		 	 betTotal = bet + bet2;
		 	System.out.println("$" + betTotal + " Dollar Bet");
			 try {
           Thread.sleep(1000);
         } catch 
           (InterruptedException e) {
            	// Delay
             return;
           }
        } while (bet < 0 || bet > 5);
    // end do while   
           
           
           try {
           Thread.sleep(1000);
         } catch 
           (InterruptedException e) {
            	// Delay
             return;
           }
        System.out.println(" "); 

// Divider           
           
     randInt4 = randomGen.nextInt(11);      
	 card4 = randInt4;
	 cardTotal2 = card2 + card4;  
	 System.out.print("DEALER HAND -");
		 try {
           Thread.sleep(1500);
         } catch 
           (InterruptedException e) {
            	// Delay
             return;
           }
      System.out.println(" " + cardTotal2);     
   		 try {
           Thread.sleep(1500);
         } catch 
           (InterruptedException e) {
            	// Delay
             return;
           }

// Divider

	 System.out.println(name + "'s Hand: " + cardTotal1);
	 betTotal = bet + bet2;
     System.out.println("Bet Total: $" + betTotal);
     System.out.println(" ");
     
   gameBank = gameBankStart -= gameBank;  
     
   if (cardTotal1 > cardTotal2) {
     System.out.println(name + "'s a Winner!");
     winner += betTotal + grandTotal;
     System.out.println("Your Bank: " + winner);
     gameBank -= gameBank - betTotal;
     System.out.println("Game Bank: " + gameBank);
   } else if
    (cardTotal1 < cardTotal2){
      System.out.println("Dealer Takes It");
      lose = betTotal - grandTotal;
      System.out.println("Your Bank: " + grandTotal);
      gameBank = gameBank + betTotal;
      System.out.println("Game Bank: " + gameBank);
    }
    
     System.out.println("");
      try {
           Thread.sleep(800);
         } catch 
           (InterruptedException e) {
            	// Delay
             return;
           }
	 randInt5 = randomGen.nextInt(5);        
	 
	switch (randInt5) {
	  case 0:
	    System.out.println("Farts have been clocked at a speed"); 
	    System.out.println("of 10 feet per second (7 mph).");
	    break;
	  case 1:
	    System.out.println("Shouldn't you be Secret Agenting?");
	    break;
	  case 2:
	    System.out.println("After Michael Jordan scored a game-high 69 points,");
	    System.out.println("teammate Stacey King quipped:");
	    System.out.println("I'll always remember this as the night that");
	    System.out.println("Michael Jordan and I combined to score 70 points.");
	    break;
	  case 3:
	    System.out.println("If you search for: askew in Google, the content");
	    System.out.println("will tilt slightly to the right.");
	    break;
	  case 4:
	    System.out.println("Stephen Hawking's son once added swear words");
	    System.out.println("to his dad's voice synthesizer as a prank.");
	    break;
	  case 5:
	    System.out.println("You can change your language on Facebook to Pirate.");
	    break;	         
	  default: 
        System.out.println("No soup for You");
		// Exit the application for invalid Months
		System.exit(0);
	 }  // Switch out

	System.out.println(" ");
     	
     }  // close blkjck