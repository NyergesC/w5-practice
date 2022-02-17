//console.log("Hello")
//console.log('Hello')
//console.log(`backtip`) 

//console.log(typeof 2)
//console.log(typeof NaN)
//console.log(0/0)
//console.log(2.14)

//console.log(true)
//console.log(false)

//console.log(undefined)
//console.log(null)

//console.log(typeof undefined)
//console.log(typeof null)

/*console.log({
    "title": "Start Coding",
    "type": "Solo",
    "difficulty": 4.1,
    "usefulness": 4.2,
    "enjoyability": 3.7,
    "materials": 3.4,
    "tasks": [
        {
            title: "Bank acccounts",
            description: ""
        },
        {
            title: "100 doors",
            description: ""
        },
        {
            title: "Word",
            description:""
        }
    ]
}) */


/*var a = "hello1"
let b = "hello2"
const c = "hello3"

console.log(a)
console.log(b)
console.log(c) */



/*function d() {
    if (1+1 === 2) { //csak itt letezik a let es a const
    }
    var a = "hello1"
    let b = "hello2"
    const c = "hello3"       
    console.log(a)
    console.log(b)
    console.log(c)
}
d ()*/

/*let e = 1
console.log(e)
e = 2
console.log(e)
e = e*2
console.log(e)*/

/*function multiplyByTwo(num) {
    console.log(num)
    return num*2
}
let f = multiplyByTwo(1)
console.log(f)
console.log(multiplyByTwo(1)); */

/*let g = {
    myMethod: function (){
        console.log("hello");
    }
}
g.myMethod()*/

/*let window = {
    addEventListener: function (eventName,eventFunction){
        if (eventName === "load"){
            eventFunction()
        }   
    }
}
window.addEventListener("load",loadEvent) */

/*let h = {
    anotherMethod: function (text) {
        return `You sent this following argument to this method: ${text}`
    }
}
let i = h.anotherMethod("argument")
console.log(i);
console.log(h.anotherMethod("another argument"));*/

/* ============================= ÚJ ÓRA 02.16.2022 ============================= */



/* ========== STRINGEK ÖSSZEHASONLÍTÁSA ========== */

/*let myString = "Mikkamakka";

let mySecondString = myString;

let myThirdString = "Mikkamakka"

console.log(myString);
console.log(mySecondString);
console.log(myString === mySecondString);
console.log(myString === myThirdString);*/

/* ========== OBJECTEK ÖSSZEHASONLÍTÁSA ========== */

/*let myObject = {
    myString: "Mikkamakka"
}

let mySecondObject = myObject;


let myThirdObject = {
    myString: "Mikkamakka"
}

mySecondObject.myString = "domdodom";

/* ========== üres STRINGEK és üres OBJECT-ek összehasonlítása ========== */


//két üres String összehasonlítás -> "true" lesz
console.log("" === "")

//két üres Object összehasonlítás -> "false" lesz, mert amint létrehozzuk az objektumot, egyből egy új objektumot hozunk létre ergo, teljesen különböző lesz. 
console.log({} === {})


//stringek közt csak több neve lesz, objektumnál új objektum jön létre más névvel.


/* ========== OBJEKTUM MÁSOLÁSA ========== */



let myFourthObject = {...myObject}; //CSAKIS IGY LEHET OBJEKTUMOT MASOLNI

myFourthObject.myString = "Vacskamati";

console.log(myObject.myString); //result domdomdom lesz
console.log(myFourthObject.myString); //result vacskamati lesz*/

/*console.log(myObject === mySecondObject);
console.log(myObject === myThirdObject); // false az eredmeny mert a primitivek mashogy viselkednek, eltarolas szinten mashol tarolodnak el az objektumok. */


/*console.log("" === "");
console.log({} === {}); // azert nem igaz mert hiaba ugyanazt a kulcsnevet es erteket adunk hozza de az objektum ujra letrejott teljesen kulon TEHAT 2 UJONNAN LETREHOZOTT NEM TUDUNK OSSZEHASONLITANI EGYENLOVEL*/





/* ========== WEB API FELDOLGOZÁS========== */



//TYPE OF FUNCTION WRITING
/*window.addEventListener("load", function(){
    console.log("Betoldott az oldal");    
})*/

function loadEvent() {


    let rootElement = document.getElementById("root");

    let card = function (movieRecieved) {
        return `
        <div class="card">
            <h2> ${movieRecieved.title}</h2>
            <div class="time">${movieRecieved.year}</div>
            <div class="rate">${movieRecieved.rate}</div>
        </div>
        `
};

//DIREKT KÓDBA ÍRT OBJEKTUM:
    //a "rootElement"-en belül létrehozunk egy ÚJ HTML elemet (insertAdjascentHTML) --> ennek a parancsnak kell adni egy pozíciót ("beforeend"), illetve egy text-et (jelen esetben ez a "card" funkció, ami egy funkciót tartalmaz, mely létrehoz egy stringet, és a stringen belüli "${.title, .year, .rate}"-t, az itt objektumként megadott 3 kulcs (title, year, rate) értékével fogja kitölteni



        rootElement.insertAdjacentHTML("beforeend", card({
            "title": "Moulin Rouge",
            "year": 2000,
            "rate": 9.9
        }));

//VÁLTOZÓBAN MENTETT OBJEKTUM

  //létrehozunk egy "actuallyFavouriteMovie" változót, mely egy 3 kulcs-érték párral (title, year, rate) rendelkező objektum
    let actuallyFavouriteMovie = {
        "title": "Eternal Sunshine of a spotless mind",
        "year": 2004,
        "rate": 9.8
    }

    //a "rootElement"-en belül létrehozunk egy ÚJ HTML elemet (insertAdjascentHTML), és a "card" funkciónak megadjuk az "actuallyFavouriteMovie" változót mint paraméter, mely tartalmazza a 3 kulcs-érték párt, amivel "card"-on belőli string-et kitölti --> a "${movieRecieved.title}" -ből lesz gyakorlatilag "${actuallyFavouriteMovie.title}"  --> "card(actuallyFavouriteMovie)"-ben az "actuallyFavouriteMovie" az a "card" funkció paramétere, aminek a funkció meghatározásakor "movieRecieved" nevet adtunk
    rootElement.insertAdjacentHTML("beforeend", card(actuallyFavouriteMovie));

     //a "rootElement"-en belül létrehozunk egy ÚJ HTML elemet (insertAdjascentHTML), és a "card" funkcióba a "movies" (data.js fájlban lévő const változó neve) adatbázis [0]-ik tömbjében (ez az első adat ami van, csak 0-tól kezdődik a számozás) lévő objektum kulcs-érték párjának értékeit íratjuk ki.
     rootElement.insertAdjacentHTML("beforeend", card(movies[0]));


    //létrehozunk egy "for" ciklust, melyben "movieSend" a változó (mi adjuk meg a nevet, hogy tudjunk rá hivatkozni), a "movies" az objekt amiben vannak az adatok --> a "for" függvény folyamatosan átmegy az adatokon amit megadunk neki (jelenleg ez a "movies" ami a data.js fájlban lévő adatbázis), és ezt egy adott változóhoz rendeli ami jelen esetben a "movieSend"
    for (const movieSend of movies) {

        //a "document" objektumon belüli "root" ID-jü elemhez adjon hozzá egy HTML elementet, mely az "insertAdjacentHTML" ()-en belül megadott pozícióban legyen, és az ott ``(backtick)-ek közé írt text-et tartalmazza
        document.getElementById("root").insertAdjacentHTML("beforeend", `
        <div class="title"> ${movie.title} </div>
        `),

        //a "root" element-be hozzon létre egy HTML elemet, mely az "insertAdjacentHTML" ()-en belül megadott pozícióban legyen, és a "card" funkció "${}" értékeit töltse ki a "movieSend" paraméterként megadott "for" függvény értékeivel.
        rootElement.insertAdjacentHTML("beforeend", card(movieSend));
    }




let card2 = function(title, year, rate){
    
    return `
    <div class="card"> 
    <h2>${title}</h2>
    <div class="time">${year}</div>
    <div class="rate">${rate}</div>
    </div>
    `
};

let anotherFavouriteMovie = {
    "title": "The Last Scout Boy",
    "year": 1991,
    "rate": 7.0
} ;


rootElement.insertAdjacentHTML("beforeend", card2(anotherFavouriteMovie.title, anotherFavouriteMovie.year, anotherFavouriteMovie.rate));

for (const movieSend of movies) {
    rootElement.insertAdjacentHTML("beforeend", card2(movieSend.title, movieSend.year, movieSend.rate));
};

//a "window" egy global object, és ebben fut minden
window.addEventListener("load", loadEvent)