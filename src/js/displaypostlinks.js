    let postData = localStorage.getItem('samplePostData')
    let loadedPosts=JSON.parse(postData)

    let divParent = document.querySelector('.main-link');

async function loadData() {
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
                posts = responseData.samplePostData

                localStorage.setItem("samplePostData", JSON.stringify(responseData.samplePostData));
                localStorage.setItem("dataLoaded", true);
                localStorage.setItem("sampleWebsocketData", JSON.stringify(responseData.sampleWebsocketData));

                return posts
        
            }).then(posts =>{
                posts["posts"].forEach(post => {
            
                    let aTag = document.createElement("a");
                    aTag.textContent = post["message"];
                    let pTag = document.createElement("p");
                    pTag.textContent = 'By '+ post["user"];
                
                    aTag.href = 'post.html?id='+post["id"]
                    divParent.appendChild(aTag);
                    divParent.appendChild(pTag);
                });
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
        }else{
            loadedPosts["posts"].forEach(post => {

                let aTag = document.createElement("a");
                aTag.textContent = post["message"];
                let pTag = document.createElement("p");
                pTag.textContent = 'By '+post["user"];
            
                aTag.href = 'post.html?id='+post["id"]
                divParent.appendChild(aTag);
                divParent.appendChild(pTag);
            });
        }

        resolve()

    });
}

// loadData().then(()=>{
//     posts["posts"].forEach(post => {

//         let aTag = document.createElement("a");
//         aTag.textContent = post["message"];
//         let pTag = document.createElement("p");
//         pTag.textContent = 'By '+post["user"];
    
//         aTag.href = 'post.html?id='+post["id"]
//         divParent.appendChild(aTag);
//         divParent.appendChild(pTag);
//     });
// }).catch(error =>{
//     console.error(error)
// })

// async function displayInfo(){
//     try{
//         await loadData()
//         // let postData = localStorage.getItem('samplePostData')
//         // let posts=JSON.parse(postData)
//         posts["posts"].forEach(post => {

//             console.log('here')
    
//             let aTag = document.createElement("a");
//             aTag.textContent = post["message"];
//             let pTag = document.createElement("p");
//             pTag.textContent = 'By '+post["user"];
        
//             aTag.href = 'post.html?id='+post["id"]
//             divParent.appendChild(aTag);
//             divParent.appendChild(pTag);
//         });
//     }catch(e){
//         console.error(e)
//     }
// }

loadData()