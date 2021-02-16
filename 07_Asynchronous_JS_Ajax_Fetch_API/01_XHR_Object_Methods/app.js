document.getElementById("button").addEventListener('click', loadData);

function loadData(){
    //Create an XHR Object 
    const xhr = new XMLHttpRequest();

    //Open - Specifies the type of request we want to make and the url of the file we want to make this request to.
    //Parameters: 1) Type of request (e.g. GET) 2)File url  3) open asynchronously
    xhr.open('GET', 'data.txt', true);

    //Optional - Used for spinners/loaders - Display when data is being fetched 
    xhr.onprogress = function(){
        console.log('READYSTATE', xhr.readyState); // ReadyState 3 - Processing state
    }

    //onload - Handle the data - Fairly new
    //In this case check that the status = 200 
    xhr.onload = function(){    
        console.log('READYSTATE', xhr.readyState);
        if(this.status === 200){ //xhr object has a property named status
            console.log(this.responseText); //responseText - Data included in the data.txt file 
        
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }
    
    // OLDER SYNTAX - Used previous to onload - Need to check readyState 4
    // xhr.onreadystatechange = function(){
        
    //     console.log('READYSTATE', xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    //If there is an error, use xhr.onerror to handle the error
    xhr.onerror = function(){
        console.log("Request error....!")
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

