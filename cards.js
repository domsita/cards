var Card = {

    init(value, suit) {
        this.value = value;
        this.suit = suit;
        return this;
    },

    show() {
        console.log(this.checkIfFacecard(this.value) + " " + this.getSuitString(this.suit));
    },

    getCard() {
        return this.checkIfFacecard(this.value) + this.getSuitString(this.suit);
    },

    getSuitString(suit) {
        switch (suit) {
            //Diamonds
            case 1:
                return String.fromCharCode(9826);

            //Clubs
            case 2:
                return String.fromCharCode(9827);

            //Hearts
            case 3:
                return String.fromCharCode(9825);

            //Spades
            case 4:
                return String.fromCharCode(9824);

            default:
                return "";
        }
    },

    checkIfFacecard(value) {
        switch (value) {
            case 1:
                return "A";
            case 11:
                return "J";
            case 12:
                return "Q";
            case 13:
                return "K";
            default:
                return new String(value);
        }
    }

}

var Deck = {

    init() {
        this.list = new Array();
        for (var i = 1; i <= 4; i++) {
            for (var j = 1; j <= 13; j++) {
                var newCard = Object.create(Card);
                newCard.init(j, i);
                this.list.push(newCard);
            }
        }
        return this;
    },

    getCard(cardIndex) {
        return this.list[cardIndex];
    },

    dealCard(cardIndex) {
            var card = this.list[cardIndex];
            this.list.splice(cardIndex, 1);
            return card;
    },

    show() {
        this.outputList = new Array();
        for (var i = 0; i < this.list.length; i++) {
            this.outputList.push(this.list[i].getCard());
        }
        console.log(this.outputList.join(" ") + "\n");
    },

    shuffle() {
        for (var i = this.list.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.list[i];
            this.list[i] = this.list[j];
            this.list[j] = temp;
        }

    },

    compareValues(c1, c2) {
        if (c1.value === 1 && c2.value !== 1) {
            return c1;
        } else if (c2.value === 1 && c1.value !== 1) {
            return c2;
        } else if (c1.value > c2.value) {
                return c1;
        } else if (c1.value < c2.value) {
                return c2;
        } else {
                return this.compareSuits(c1, c2);
        }
    },

    compareSuits(c1, c2) {
        var higher = (c1.suit < c2.suit) ? c2 : c1;
        return higher;
    }

}

var Hand = {
    init(sizeOfHand, deck) {
        this.holding = new Array();
        while (sizeOfHand > 0) {
            this.holding.push(deck.dealCard(0));
            sizeOfHand--;
        }
    },

    show(deck) {
        var outString = "";

        for (var i = 0; i < this.holding.length; i++) {
            var card = this.holding[i];
            outString += card.getCard() + " ";
        }
        console.log(outString);

    }
}

var deck = Object.create(Deck);
var deck = deck.init();
deck.shuffle();
deck.show();

var hand1 = Object.create(Hand);
hand1.init(10, deck);
hand1.show();

var hand2 = Object.create(Hand);
hand2.init(7, deck);
hand2.show();

deck.show();
