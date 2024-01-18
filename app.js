console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 1; i <= 100; i++){
   if(i % 2 === 0){
    continue;
   } else {
    console.log(i);
   }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(i);
        console.log('FIZZBUZZ');
    } else if(i % 3 === 0) {
        console.log(i);
        console.log('FIZZ')
    } else if(i % 5 === 0) {
        console.log(i);
        console.log('BUZZ');
    } else {
        continue;
    }
}


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let whileNum = 1;
while(whileNum <= 100) {
    console.log(whileNum);
    whileNum += 2; 
}

console.log();

let doNum = 1;

do {
    console.log(doNum);
    doNum += 2;
    
} while(doNum <= 100);

console.log();

let whileNum2 = 1;
while (whileNum2 <= 100) {
    if (whileNum2 % 3 === 0 && whileNum2 % 5 === 0) {
        console.log(whileNum2);
        console.log('FIZZBUZZ');
    } else if (whileNum2 % 3 === 0) {
        console.log(whileNum2);
        console.log('FIZZ');
    } else if (whileNum2 % 5 === 0) {
        console.log(whileNum2);
        console.log('BUZZ');
    }
    whileNum2++;
}

let doNum2 = 1;

do {
    console.log(doNum2);
    if (doNum2 % 3 === 0 && doNum2 % 5 === 0) {
        console.log(doNum2);
        console.log('FIZZBUZZ');
    } else if (doNum2 % 3 === 0) {
        console.log(doNum2);
        console.log('FIZZ');
    } else if (doNum2 % 5 === 0) {
        console.log(doNum2);
        console.log('BUZZ');
    }
    doNum2++;
    
} while(doNum2 <= 100);



// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
let found = false;
for(let i = 0; i <= n; i++) {
    if(i === value) {
        console.log("Found value!");
        found = true;
        break;
    } 
} 
    if (!found) {
        console.log("Did not find value");
    }

