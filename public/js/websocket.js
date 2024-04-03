let registerForm = document.getElementById("websocket-content");
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

// Display that we have opened the webSocket
socket.onopen = (event) => {
    appendMsg('Websocket connected');
};
  
// Display messages we receive from our friends
socket.onmessage = async (event) => {
    const text = await event.data;
    console.log(text)
    appendMsg(text);
};

// If the webSocket is closed then disable the interface
socket.onclose = (event) => {
    appendMsg('Websocket disconnected');
};

// Create one long list of messages
function appendMsg(msg) {
    let pTag = document.createElement("p")
    pTag.textContent = msg
    registerForm.appendChild(pTag);
}
