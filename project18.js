function rollDie() {
    const dice = document.getElementById("dice");
    const displayResult = document.getElementById("result");

    setTimeout(() => {
        const result = Math.floor(Math.random() * 6) + 1;
        dice.innerText = result;
        displayResult.innerText = `Result: ${result}`;
    }, 1000);
}