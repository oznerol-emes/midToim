angular.module('blackJack', [])
	.controller('buttonsController', function ($http) { // main open
	
	var game = this;
	
		game.greeting = 'Welcome to Anti-Violence BlackJack Ver. 1.OH.Squirrel';


																											//below for GET SHUFFLE

game.getShuffle= function () { //get shuffle open
	console.log('check to see if shuffle loading up')
	$http.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6').then(//openstatement
		
		function (res) { //open res
			console.log('success!!!', res.data);
			game.shuff = res.data;			
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
		},// close res
		function(err) {
            console.log(err)
    }); 
} // get draw close



 												//below for RESHUFFLE CARDS

game.getReshuffle= function () { //get reshuffle open
	console.log('check to see if shuffle loading up')
	$http.get('https://deckofcardsapi.com/api/deck/dhy28vl3gag7/shuffle/').then(
		function (res) { //open res
			console.log('yeeeaaahhhhh boyeeeeeeeeee!')
			game.reshuff = res.data
		},// close res
		function(err) {
			console.log('err')	
		}); 
} // get reshuffle close

 										//below for BRAND NEW DECK

 game.getNewDeck= function () { //get newDeck open
 	console.log('check to see if shuffle loading up')
 		$http.get('https://deckofcardsapi.com/api/deck/new/').then(
 			function (res) { //open res
				console.log('alright, alright, alright')
				game.newDeck = res.data
 			},
 			function (err){
 				console.log('err')
 		}); // close res

 } // get newDeck close


 										//below for a PARTIAL DECK

game.getPartialDeck= function () { //get partial Deck open
	console.log('check to see if shuffle loading up')
	$http.get('https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH').then(
		function (res) { //open res
			console.log('got this')
			game.partialdck = res.data
		},
			function (err) {
				console.log('err')	
	}); // close res

} // get partial deck close

// 										//below for ADDING TO PILES

game.getAddingToPiles= function () { //get adding to piles open
	console.log('check to see if shuffle loading up')
	$http.get('https://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/add/?cards=AS,2S').then(
		function (res) { //open res
			console.log('piles a go')
			game.piles = res.data
		}, function (err) {
				console.log('err')
		}); // close res
} // get adding to piles close

// 										//below for drawing from piles


// game.getDrawingFromPiles= function () { //get drawing from piles open
// 	console.log('check to see if drawing from piles loading up')
// 	$http.get('https://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/draw/?cards=AS').then(
// 		function (res) { //open res
// 				console.log('draw that pile')
//				game.drawingfrom = res.data
//			game.drwng = res.data.cards
//     }, function (err) {
//					console.log('err') 		
// 		}) // close res
// } // get drawing from piles close
//     }
//     "cards": [
//         {
//             "image": "https://deckofcardsapi.com/static/img/AS.png",
//             "value": "ACE",
//             "suit": "SPADES",
//             "code": "AS"
//         }
//     ]
// 	} // data drawing from piles close





		
	} ); // main close

	







	
	