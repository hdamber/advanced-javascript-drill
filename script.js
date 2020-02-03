//hoisting

console.log('some text');
let avg = findAvg(2, 2);
console.log('some text', avg);
function findAvg(a, b) {
    console.log('some text');
    var answer = ( a + b) / 2;
    return answer;
}

//scoping
let fruits = ['strawberry', 'grape', 'pineapple']
let leastFav;

function printFruits() {
    favFruit = fruits[2];
    console.log(fruits[0]);

    leastFav = fruits[1];
    console.log(fruits[1]);

    function printFavFruit() {
        console.log(favFruit);
    }


printFavFruit();

}

printFruits();

helloFunc () 
function helloFunc () {
    console.log('Hello')

}

function msg () {
    let msgText = "How are you?"

    function displayText(){
      alert(msgText)  
    }
    return displayText
    
}
let myMsg = msg ();
myMsg();