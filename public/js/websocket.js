let registerForm = document.getElementById("websocket-content");
let websocketData = JSON.parse(localStorage.getItem("sampleWebsocketData"))

console.log(websocketData)
console.log(websocketData["data"])

websocketData["data"].forEach(comment => {

    let pTag = document.createElement("p")
    pTag.textContent = comment
    registerForm.appendChild(pTag);

});
