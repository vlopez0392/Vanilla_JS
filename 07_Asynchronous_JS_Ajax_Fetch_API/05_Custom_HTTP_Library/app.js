//Trying out our HTTP Library

const http = new easyHTTP;

//GET posts synchronously
// const posts = http.get('https://jsonplaceholder.typicode.com/posts');
// console.log(posts); //Data is returned AFTER this console.log statement - Use a callback instead

//GET all posts asynchronously
// http.get('https://jsonplaceholder.typicode.com/posts', function(err,response){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(response);
//     }
// });

//GET single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err,post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });

//POST a post  
//Let's create the data first 
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
}

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });

//Update Post with PUT
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });

//Delete a post with DELETE 
http.delete('https://jsonplaceholder.typicode.com/posts/5', function(err,response){
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }
});