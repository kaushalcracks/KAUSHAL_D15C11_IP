// Calculator functionality
function calculate(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        if (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/" && operation !== "^") {
            reject("Invalid operation");
        }


        if (operation === "/" && num2 === 0) {
            reject("Cannot divide by zero");
        }


        let result;
        switch (operation) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
            case "^":
                result = Math.pow(num1, num2);
                break;
        }


        resolve(result);
    });
}


const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;


    calculate(num1, num2, operation)
        .then(result => {
            document.getElementById("result").textContent = `Result: ${result}`;
        })
        .catch(error => {
            document.getElementById("result").textContent = `Error: ${error}`;
        });
});


// Custom iterator for squares of numbers
function* squareIterator(array) {
    for (const num of array) {
        yield num * num;
    }
}


const iterateButton = document.getElementById("iterate");
iterateButton.addEventListener("click", () => {
    const numbersInput = document.getElementById("numbers").value;
    const numbersArray = numbersInput.split(",").map(Number);
    const squaresIterator = squareIterator(numbersArray);
    const squareList = document.getElementById("square-list");
    squareList.innerHTML = "";


    for (const square of squaresIterator) {
        const listItem = document.createElement("li");
        listItem.textContent = square;
        squareList.appendChild(listItem);
    }
});


// Prime number generator
function* primeGenerator(limit) {
    yield 2; // Handle the special case of 2


    for (let num = 3; num <= limit; num += 2) {
        let isPrime = true;
        for (let divisor = 3; divisor * divisor <= num; divisor += 2) {
            if (num % divisor === 0) {
                isPrime = false;
                break;
            }
        }


        if (isPrime) {
            yield num;
        }
    }
}


const generateButton = document.getElementById("generate");
generateButton.addEventListener("click", () => {
    const limit = parseInt(document.getElementById("limit").value);
    const primeList = document.getElementById("prime-list");
    primeList.innerHTML = "";


    for (const prime of primeGenerator(limit)) {
        const listItem = document.createElement("li");
        listItem.textContent = prime;
        primeList.appendChild(listItem);
    }
});



 
