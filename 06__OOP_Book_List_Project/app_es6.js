class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{
    addBookToList(book){
        const list = document.getElementById('book-list');
    
        //Create tr element 
        const row = document.createElement('tr');
    
        //Insert cols 
        row.innerHTML = `<td>${book.title}</td>
                         <td>${book.author}</td>
                         <td>${book.isbn}</td>
                         <td><a href = '#' class = "delete">X</a></td>`
        list.appendChild(row);
    }

    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }

    showAlert(message, className){
        //Create div
        const div = document.createElement('div');
    
        //Add classes
        div.className = `alert ${className}`;
    
        //Add text
        div.appendChild(document.createTextNode(message));
    
        //Get container and form 
        const container = document.querySelector('.container'),
              form = document.querySelector('#book-form');
    
        //Display alert
        container.insertBefore(div, form);
    
        //Timeout after 3 seconds 
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }

    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

}

document.getElementById('book-form').addEventListener('submit', 
    function(e){

        //Get form values
        const title =  document.getElementById('title').value,
              author = document.getElementById('author').value,
              isbn =   document.getElementById('isbn').value;
        
        //Instantiate Book
        const book = new Book(title, author, isbn);
        
        //Instantiate UI 
        const ui  = new UI();

        //Validate 
        if(title === '' || author === '' || isbn === ''){
            ui.showAlert('Please fill in all fields', 'error');
        }else{
            //Add book to list
            ui.addBookToList(book) //Prototype method

            //Clear fields
            ui.clearFields()
        
            //Show success
            ui.showAlert('Book Added!', 'success')
        }

        e.preventDefault();
});

//Delete books - Event Listener 
document.getElementById('book-list').addEventListener('click', function(e){
    const ui = new UI();

    ui.deleteBook(e.target);

    //Show Alert 
    ui.showAlert('Book Removed!', 'success');
    e.preventDefault();
}
);

