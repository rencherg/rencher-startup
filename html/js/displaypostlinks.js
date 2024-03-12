let postData = localStorage.getItem('samplePostData')
posts=JSON.parse(postData)

let divParent = document.querySelector('.main-link');

function loadData() {
    return new Promise((resolve, reject) => {

        if (!localStorage.getItem("dataLoaded")){

            fetch('/data', {
                method: 'GET',
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
        
                return response.json()
            }).then(responseData => {
                localStorage.setItem("samplePostData", JSON.stringify(responseData.samplePostData));
                localStorage.setItem("sampleUsers", JSON.stringify(responseData.sampleUsers));
                localStorage.setItem("dataLoaded", true);
                localStorage.setItem("sampleWebsocketData", JSON.stringify(responseData.sampleWebsocketData));
        
            })
            .catch(error => {
                // Handle error here
                console.error('There was a problem with your fetch operation:', error);
            });
        }

        resolve()

    });
}

loadData().then(()=>{
    posts["posts"].forEach(post => {

        let aTag = document.createElement("a");
        aTag.textContent = post["message"];
        let pTag = document.createElement("p");
        pTag.textContent = 'By '+post["user"];
    
        aTag.href = 'post.html?id='+post["id"]
        divParent.appendChild(aTag);
        divParent.appendChild(pTag);
    });
}).catch(error =>{
    console.error(error)
})