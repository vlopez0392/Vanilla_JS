document.getElementById("button").addEventListener('click', loadData);

function loadData(){
    //Create an XHR Object 
    const xhr = new XMLHttpRequest();

    //Open - Specifies the type of request we want to make and the url of the file we want to make this request to.
    //Parameters: 1) Type of request (e.g. GET) 2)File url  3) open asynchronously
    xhr.open('GET', 'data.txt', true);

    //onload - Handle the data 
    //In this case check that the status = 200 
    xhr.onload = function(){    
        if(this.status === 200){ //xhr object has a property named status
            console.log(this.responseText); //responseText
        }
    }

    xhr.send();

    //HTTP Statuses 
    //200: "OK"
    //403: "Forbidden"
    //404: "Not Found"

    //The above process has several readystate Values
    // 0 - Request not initialized
    // 1 - Server Connection Established 
    // 2 - Request received 
    // 3 - Processing request
    // 4 - Request finished and response is ready 
}

