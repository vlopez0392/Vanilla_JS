//ES6 Promises - Part of the ES6 standard 
// Aktearnative way of handling asynchronous operations 

const posts = [ //Simulate server and DB
    {title: 'Post One', body: 'This is post One'},
    {title: 'Post Two', body: 'This is post Two'}
]; 

function createPost(post, callback){ //Pass the callback function
    setTimeout(function(){
        posts.push(post);
        callback();
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

//Done asynchronously
createPost({title: 'Post Three', body: 'This is post 3'}, getPosts);
