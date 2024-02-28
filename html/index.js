function addInputField(id) {
    // Create a new input element
    var input = document.createElement('input');
    input.type = 'text'; // You can change the type if needed

    // Append the input to the container
    document.getElementById(id).appendChild(input);
}