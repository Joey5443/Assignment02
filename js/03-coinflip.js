var choice = prompt("Heads or Tails?");
let randomNum = Math.round(Math.random());
console.log(randomNum);
if (randomNum === 1) {
    if (choice === "Heads"){
        document.write("The flip was heads and you chose heads...you win!");
    }else {
        document.write("The flip was heads but you chose tails...you lose!")
    }
}else {
    if (choice === "Tails"){
        document.write("The flip was tails and you chose tails...you win!");
    }else {
        document.write("The flip was tails but you chose heads...you lose!")
    }
}