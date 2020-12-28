/*Library Model - Experimenting with inheritance*/

/*In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD (optional). These three subclasses have the following properties and methods:
Book

    Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
    Getters: all properties have a getter
    Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

Movie

    Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
    Getters: all properties have a getter
    Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
*/


/*Media Class*/
class Media{
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    //Getters and setters 
    get title(){
        return this._title;
    }
    get isCheckedOut(){
        return this._isCheckedOut;
    }
    get ratings(){
        return this._ratings;
    }
    set isCheckedOut(checkedOut){
        this._isCheckedOut = checkedOut;
    }

    //Class Methods
    toggleCheckOutStatus(){
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating(){
        const reducer = (acc,curr) => acc+curr;
        const sum = this._ratings.reduce(reducer);

        return (sum/(this._ratings.length));
    }

    addRating(rating){
        this._ratings.push(rating);
    }
}

/*Book Class*/
class Book extends Media{
    constructor(author, title, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author(){
        return this._author;
    }

    get pages(){
        return this._pages;
    }
}

/*Movie Class*/
class Movie extends Media{
    constructor(title, director, runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director(){
        return this._director;
    }

    get runTime(){
        return this._runTime;
    }
}

//Log
// const someMedia = new Media('Devour');
// console.log(someMedia.title);
// console.log(someMedia.isCheckedOut);
// console.log(someMedia.ratings);

// someMedia.addRating(100);
// someMedia.addRating(50);
// someMedia.addRating(30);
// console.log(someMedia.getAverageRating());

// someMedia.toggleCheckOutStatus();
// console.log(someMedia.isCheckedOut);

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

