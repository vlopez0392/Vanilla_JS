//Listen for submit 
document.getElementById('loan-form').addEventListener('submit', function(e){

    //Hide results
    document.getElementById('results').style.display = 'none'; //Hide results whenever the Calculate button is pressed

    //Show loader 
    document.getElementById('loading').style.display = 'block';

    //Set timeout
    setTimeout(calculateResults,2000); //2000 ms = 2 s - Call calculate results after 2 seconds 

    e.preventDefault();
});

//Calculate results 
function calculateResults(e){
    console.log('Calculating...');
    
    //UI vars
    const amount =   document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years =    document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment =   document.getElementById('total-payment');
    const totalInterest =  document.getElementById('total-interest');
    
    //Calculations 
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value)/(100*12);
    const calculatedPayments = parseFloat(years.value) *12;
    
    //Compute monthly payment
    const x = Math.pow(1+calculatedInterest,calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly*calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
        
        //Show results
        document.getElementById('results').style.display = 'block';
    } else {
        showError('Please check your numbers');
    }
    //Hide loader
    document.getElementById('loading').style.display = 'none';
}

//Show and clear error
function showError(error){
    //Create div
    const errorDiv = document.createElement('div');

     //Get elements 
     const card = document.querySelector('.card');
     const heading = document.querySelector('.heading');

    //Add class
    errorDiv.className = 'alert alert-danger'; //Bootstrap class name to display the appropriate style

    //Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    //Insert error above element (Pass in two elements, second element will be displayed above the first (parent) element)
    card.insertBefore(errorDiv, heading);

    //Window object -> Set timeout -> SOmething will happen after certain amount of seconds
    setTimeout(clearError,3000); //Second parameter in ms
}

function clearError(){
    document.querySelector('.alert').remove();
}