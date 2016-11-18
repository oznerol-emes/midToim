angular.module('blackJack', [])
	.controller('buttonsController', function ($http) { // main open
	
	var game = this;
	// vars for cards
	
	// vars for decks

		game.greeting = 'Welcome to Anti-Violence BlackJack Ver. 1.OH.Squirrel';


																											//below for GET SHUFFLE

game.getShuffle= function () { //get shuffle open
	console.log('check to see if shuffle loading up')
	$http.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6').then(//openstatement
		
		function (res) { //open res
			console.log('success!!!', res.data);
			game.something = res.data;			
		 },// close res			
			function(err) {
            console.log(err)
            });
}; // get shuffle close




																										//below for DRAW A CARD 

game.getDraw= function () { //get draw open
	console.log('check to see if draw loading up')
	$http.get('https://deckofcardsapi.com/api/deck/dhy28vl3gag7/draw/?count=4').then(
		function (res) { //open res
			console.log('success!!!', res.data);
			game.cards = res.data.cards;
			// game.something = res.data;
		},// close res
		function(err) {
            console.log(err)
            }); 
} // get draw close

//deck as d
// game.cards = res.data.cards; <=== goes to html
//<div>
	//<img href = "game.cards[0].image"/>
	//</div>



 										//below for RESHUFFLE CARDS

// game.getReshuffle= function () { //get reshuffle open
// 	console.log('check to see if shuffle loading up')
// 	$http.get('https://deckofcardsapi.com/api/deck/<<deck_id>>/shuffle/').then(
// 		function (res) { //open res

// 			// body... game.something = res.data

// 			{ //data reshuffle open
//     		"success": true,
//     		"deck_id": "3p40paa87x90",
//    			"shuffled": true,
//     		"remaining": 52
// 			} // data reshuffle close
// 		}) // close res
// 	// body...
// } // get reshuffle close

// 										//below for BRAND NEW DECK

// game.getNewDeck= function () { //get newDeck open
// 	console.log('check to see if shuffle loading up')
// 		$http.get('https://deckofcardsapi.com/api/deck/new/').then(
// 			function (res) { //open res
// 			// body... game.something = res.data
// 			{ //data newDeck open
// 		    "success": true,
// 		    "deck_id": "3p40paa87x90",
// 		    "shuffled": true,
// 		    "remaining": 52
// 			} // data newDeck close
// 		}) // close res

// } // get newDeck close


// 										//below for a PARTIAL DECK

// game.getPartialDeck= function () { //get partial Deck open
// 	console.log('check to see if shuffle loading up')
// 	$http.get('https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH').then(
// 		function (res) { //open res
// 			// body... game.something = res.data
// 			{ //data partial deck open
// 		    "success": true,
// 		    "deck_id": "3p40paa87x90",
// 		    "shuffled": true,
// 		    "remaining": 12
// 		} // data partial deck close
// 	}) // close res

// } // get partial deck close

// 										//below for ADDING TO PILES

// game.getAddingToPiles= function () { //get adding to piles open
// 	console.log('check to see if shuffle loading up')
// 	$http.get('https://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/add/?cards=AS,2S').then(
// 		function (res) { //open res
// 			// body... game.something = res.data
// 			{ //data adding to piles open
//     "success": true,
//     "deck_id": "3p40paa87x90",
//     "shuffled": true,
//     "remaining": 52
// 	} // data adding to piles close
// 		}) // close res
// 	// body...
// } // get adding to piles close

// 										//below for drawing from piles

// game.getDrawingFromPiles= function () { //get drawing from piles open
// 	console.log('check to see if drawing from piles loading up')
// 	$http.get('https://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/draw/?cards=AS').then(
// 		function (res) { //open res
// 			// body... game.something = res.data
// 			{ //data drawing from piles open
//     		 "success": true,
//     "deck_id": "3p40paa87x90",
//     "remaining": 12,
//     "piles": {
//         "discard": {
//             "remaining": 1
//         }
//     },
//     "cards": [
//         {
//             "image": "https://deckofcardsapi.com/static/img/AS.png",
//             "value": "ACE",
//             "suit": "SPADES",
//             "code": "AS"
//         }
//     ]
// 	} // data drawing from piles close
// 		}) // close res
// 	// body...
// } // get drawing from piles close




		
	} ); // main close

	







	
	