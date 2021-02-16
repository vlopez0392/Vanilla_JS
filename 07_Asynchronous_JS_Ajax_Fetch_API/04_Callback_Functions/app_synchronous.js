//Callback Functions - Functions that are passed as parameters in another function (e.g. functions passed in forEach)
//Callbacks may be both synchronous and asynchronous functions 

//Problem: We will simulate the creation of a blog post using the setTimeout function, however, when we get the current blog posts,
//due to the delay in the setTimeout, we won't be able to see the post created by createPost. We will then solve this problem using 
//a callback function. 

const posts = [ //Simulate server and DB
    {title: 'Post One', body: 'This is post One'},
    {title: 'Post Two', body: 'This is post Two'}
]; 

function createPost(post){
    setTimeout(function(){
        posts.push(post);
    }, 2000);
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`
        })

        document.body.innerHTML = output;
    },1000)
}

//Done Synchronously
createPost({title: 'Post Three', body: 'This is post 3'});
getPosts();