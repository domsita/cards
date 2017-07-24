// testing Cards

// functions to get the first and second card and the higher of the two, be sure to shuffle the deck first.
var one = function() { return deck.getCard(0);}
var two = function() { return deck.getCard(1);}

var higher = function(c1, c2) {
    return deck.compareValues(c1, c2);
}

var firstCard = one();
var secondCard = two();

firstCard.show();
secondCard.show();

console.log("_ _ _ _ _")

var higher = higher(firstCard, secondCard);
higher.show()




// compares the queen of hearts with the queen of spades
var qh = Object.create(Card);
qh.init(12, 3);

var qs = Object.create(Card);
qs.init(12, 4);

qh.show();
qs.show();

console.log("_ _ _ _ _")

var qCompare = deck.compareValues(qh, qs);
qCompare.show();
