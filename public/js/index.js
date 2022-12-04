// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('../service-worker.js')
//         .then((registering)=>{
//             // Registration was successful
//             console.log("Browser: Service Worker registration is successful with the scope ",registering.scope);
//         })
//         .catch((error)=>{
//             //The registration of the service worker failed
//             console.log("Browser: Service Worker registration failed with the error ",error);
//         });
// } else {
//     //The registration of the service worker failed
//     console.log("Browser: I don't support Service Workers :(");
// }

function myFunction() {
    var x = document.getElementById("dropdown-content");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

var btn = document.getElementById("dropbtn")

btn.addEventListener('click', (event) => {
    console.log("Clicked")
    myFunction();
})


var dangerBtn = document.getElementById("btnDanger");
const baseUrl = 'http://localhost:8383'

async function sendSms(e) {
    e.preventDefault()
    fetch(baseUrl, {method: 'GET', mode: 'cors'})
    .then(function(response) {
        //console.log(response.json())
        return response.json();
    }).then(data => {
        console.log(data)
    }).catch(function(err){
        console.log(err)
    })
}


dangerBtn.addEventListener('click', sendSms)