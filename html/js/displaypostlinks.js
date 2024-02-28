let posts = JSON.parse(localStorage.getItem('samplePostData'))
console.log(posts);
console.log(posts["posts"]);

let divParent = document.querySelector('.main-link');

posts["posts"].forEach(post => {

    // console.log(post)
    let aTag = document.createElement("a");
    aTag.textContent = post["message"];
    let pTag = document.createElement("p");
    pTag.textContent = 'By '+post["user"];
    // console.log(post["id"])
    // console.log(post["message"])

    aTag.href = 'post.html?id='+post["id"]
    divParent.appendChild(aTag);
    divParent.appendChild(pTag);
});


// // Sample array
// const dataArray = ["Apple", "Banana", "Orange", "Grape"];

// // Get the element where you want to append the <p> tags
// const container = document.querySelector('.main-link');

// // Loop through the array
// dataArray.forEach(item => {
//     // Create a new <p> element
//     const paragraph = document.createElement("p");
    
//     // Set the text content of the <p> element to the current array item
//     paragraph.textContent = item;
    
//     // Append the <p> element to the container
//     container.appendChild(paragraph);
// });