// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e) {
    // Hide results
    document.getElementById('results').style.display = 'none';
    
    //Show loader 
    document.getElementById('loading').style.display = 'block';
    
    setTimeout(calculateResults, 2000);
    
    
    e.preventDefault();
});

// Calculate results
function calculateResults(e) {
    //  Get HTML elements
    const amount =  document.getElementById('amount');
    const interest =  document.getElementById('interest');
    const years =  document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
    
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value / 100 / 12);
    console.log(calculatedInterest);
    const calculatedPayments = parseFloat(years.value) * 12;
    console.log(calculatedPayments);
    
    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    console.log(x);
    const monthly = (principal*x*calculatedInterest)/(x-1);
    console.log(monthly);
    
    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        console.log(monthly.toFixed(2));
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        console.log(totalPayment.value);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
        
        // Show results
        document.getElementById('results').style.display = 'block';
        
        //Hide loader
        document.getElementById('loading').style.display = 'none';
        
    } else {
        showError('Numbers entered are incorrect');
    }
    
}


// Show Error
function showError(error) {
     // Show results
    document.getElementById('results').style.display = 'none';
        
    //Hide loader
    document.getElementById('loading').style.display = 'none';
    
    
    
    
    // Create a div
    const errorDiv = document.createElement('div');
    
    // Get elements
    const card =  document.querySelector('.card');
    const heading = document.querySelector('.heading');
    
    //Add class
    errorDiv.className = 'alert alert-danger';
    
    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));
    
    // Insert error above heading
    card.insertBefore(errorDiv, heading);
    
    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
    
}

// Clear error

function clearError() {
    document.querySelector('.alert').remove();
}
