document.getElementById("button1").addEventListener('click', loadCustomer);
document.getElementById("button2").addEventListener('click', loadCustomers);

//Load customer
function loadCustomer(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function(){
        if(xhr.status === 200){
            const customer = JSON.parse(this.responseText); //Parses into a JS Object literal
        
            const output = `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
            `;

            document.getElementById('customer').innerHTML = output;
        }  
    }
    xhr.send();
}

//Load Customers
function loadCustomers(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function(){
        if(xhr.status === 200){
            const customers = JSON.parse(this.responseText); //Parses into a JS Object literal
            
            let output = '';
            customers.forEach(function(customer){
                output += `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
            `;
            })

            document.getElementById('customers').innerHTML = output;
        }  
    }
    xhr.send();
}