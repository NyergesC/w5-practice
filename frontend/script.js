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

/*let myString = "Mikkamakka";

let mySecondString = myString;

let myThirdString = "Mikkamakka"

console.log(myString);
console.log(mySecondString);
console.log(myString === mySecondString);
console.log(myString === myThirdString);*/

/*let myObject = {
    myString: "Mikkamakka"
}

let mySecondObject = myObject;


let myThirdObject = {
    myString: "Mikkamakka"
}

mySecondObject.myString = "domdodom";

let myFourthObject = {...myObject}; //CSAKIS IGY LEHET OBJEKTUMOT MASOLNI

myFourthObject.myString = "Vacskamati";

console.log(myObject.myString); //result domdomdom lesz
console.log(myFourthObject.myString); //result vacskamati lesz*/

/*console.log(myObject === mySecondObject);
console.log(myObject === myThirdObject); // false az eredmeny mert a primitivek mashogy viselkednek, eltarolas szinten mashol tarolodnak el az objektumok. */


/*console.log("" === "");
console.log({} === {}); // azert nem igaz mert hiaba ugyanazt a kulcsnevet es erteket adunk hozza de az objektum ujra letrejott teljesen kulon TEHAT 2 UJONNAN LETREHOZOTT NEM TUDUNK OSSZEHASONLITANI EGYENLOVEL*/

//TYPE OF FUNCTION WRITING
/*window.addEventListener("load", function(){
    console.log("Betoldott az oldal");    
})*/

function loadEvent()   {
    console.log("masodik betoles");
    let rootElement = document.getElementById("root");

    /*let card = function (movieRecieved) {
        return `
        <div class="card">
             <h2> ${movieRecieved.title}</h2>
            <div class="time">${movieRecieved.year}</div>
            <div class="rate">${movieRecieved.rate}</div>
        </div>
        `;
};

    for (const movieSend of movies) {
        rootElement.insertAdjacentHTML("beforeend",card(movieSend));
     }
     console.log(movies); */

     let card2 = function (movieRecieved) {
        return `
        <div class="card">
             <h2> ${movieRecieved.title}</h2>
            <div class="time">${movieRecieved.year}</div>
            <div class="rate">${movieRecieved.rate}</div>
        </div>
        `};


        for (const movieSend of movies) {
            rootElement.insertAdjacentHTML("beforeend",card2(movieSend.title, movieSend.year,
            movieSend.rate));
         }
         console.log(movies);
     

}
window.addEventListener("load", loadEvent) 









