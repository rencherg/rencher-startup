let posts = JSON.parse(localStorage.getItem('samplePostData'))

let divParent = document.querySelector('.main-link');

posts["posts"].forEach(post => {

    let aTag = document.createElement("a");
    aTag.textContent = post["message"];
    let pTag = document.createElement("p");
    pTag.textContent = 'By '+post["user"];

    aTag.href = 'post.html?id='+post["id"]
    divParent.appendChild(aTag);
    divParent.appendChild(pTag);
});