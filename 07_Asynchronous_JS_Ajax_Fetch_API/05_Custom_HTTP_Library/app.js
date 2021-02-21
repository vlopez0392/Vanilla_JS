//

const http = new easyHTTP;

//Get posts synchronously
// const posts = http.get('https://jsonplaceholder.typicode.com/posts');
// console.log(posts); //Data is returned AFTER this console.log statement - Use a callback instead

//Get posts asynchronously
http.get('https://jsonplaceholder.typicode.com/posts', function(err,response){
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }
});