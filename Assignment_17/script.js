var country = "India";
var continent = "Asia";
var population = 100000;

console.log(country, continent, population);

// Step 2: Declare variables
var isIsland = true;
var language;

console.log(typeof isIsland);  // boolean
console.log(typeof population); // number
console.log(typeof country); // string
console.log(typeof language); // undefined (since it's not assigned yet)

// Step 3: Assigning language and using const
language = "English";
console.log(language);
const language1 = "Tamil";
console.log(language1);

// Step 4: Basic Operations
var population1 = population / 2;
console.log("No of people living when population splits in half:", population1);
population++;
console.log("Population after incrementing by 1:", population);
console.log("Is India's population greater than Finland's? ", population > 6000000);
console.log("Is India's population less than an average country? ", population < 33000000);


const description1 = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description1);


console.log('9' - '5');
console.log('19' - '13' + '17'); 
console.log('19' - '13' + 17); 
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2); 

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('How many neighbour countries does your country have? ', (input) => {
    var numNeighbours = Number(input);

    if (numNeighbours === 1) {
        console.log("Only one border!");
    } else if (numNeighbours > 1) {
        console.log("More than 1 border");
    } else {
        console.log("No border");
    }

    rl.close();
});

// 7.
// a. Let's say Sarah is looking for a new country to live in. She wants to live in 
// a country that speaks english, has less than 50 million people and is not 
// an island.
// b. Write an if statement to help Sarah figure out if your country is right for 
// her. You will need to write a condition that accounts for all of Sarah's 
// criteria. 
// c. If yours is the right country, log a string like this: 'You should live in 
// Portugal :)'. If not, log 'Portugal does not meet your criteria :('
// d. Probably your country does not meet all the criteria. So go back and 
// temporarily change some variables in order to make the condition true 
// (unless you live in Canada :D

if(language === "English" && population > 50000000 && !isIsland){
    console.log( "You should live in  Portugal :)" );
}
else{
    console.log("Portugal does not meet your criteria :(");
}
(function(){
    console.log('Hello World');
})
();

var print =   function(){
    console.log('Hello World');
}


