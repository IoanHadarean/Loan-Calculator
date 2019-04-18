// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

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
    
    
    
    e.preventDefault();
}