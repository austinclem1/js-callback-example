const secondsInput = document.querySelector("#seconds-input");

const messageInput = document.querySelector("#message-input");
messageInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        goButton.onclick();
    }
});

const messageDisplay = document.querySelector("#message-display");

const goButton = document.querySelector("#go-button");
goButton.onclick = () => {
    const secondsToWait = secondsInput.value || 0;
    const messageToDisplay = messageInput.value || "You didn't put a message in!";
    setTimeout(() => {
        messageDisplay.innerHTML = messageToDisplay;
    }, secondsToWait * 1000);
}
