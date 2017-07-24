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
            case 1:
                return String.fromCharCode(9826);
            case 2:
                return String.fromCharCode(9827);
            case 3:
                return String.fromCharCode(9825);
            default:
                return String.fromCharCode(9824);
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

    show() {
        this.outputList = new Array();
        for (var i = 0; i < this.list.length; i++) {
            this.outputList.push(this.list[i].getCard());
        }
        console.log(this.outputList.join(" ") + "\n\n");
    },

    shuffle() {
        for (var i = this.list.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.list[i];
            this.list[i] = this.list[j];
            this.list[j] = temp;
        }

    }

}

var deck = Object.create(Deck);
deck.init();
deck.show();
deck.shuffle();
deck.show();
deck.shuffle();
deck.show();