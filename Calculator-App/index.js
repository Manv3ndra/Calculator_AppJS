const screen = document.getElementById("calc-screen")
const buttons = document.querySelectorAll("button")

// console.log(screen)
// console.log(buttons)

function handlekeypress (input) {
    if (input === "Enter" || input === "="){
        try {
            screen.innerText = eval(screen.innerText)
        } catch (error) {
            screen.innerText = "ERROR"
        }
    }
    else if (input === "Escape" || input === "C") {
        screen.innerText = ""
    }
    else if (input === "Backspace") {
        screen.innerText = screen.innerText.slice(0,-1)
    }
    else{
        screen.innerText += input
    }
}

buttons.forEach(button => {
    button.addEventListener("click", () =>{
        handlekeypress(button.innerText)
    })
});

document.addEventListener("keydown", function(event){
    const keyPressed = event.key

    const validkeys = /^[0-9\+\-\*\/]$/

    if (validkeys.test(keyPressed) || keyPressed === "Enter" || keyPressed === "Escape" || keyPressed === "Backspace"){
        // console.log(keyPressed)
        handlekeypress(keyPressed)
    }
})