document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Simple Form Validation for Login Page
    const loginForm = document.getElementById('loginForm');
    if(loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if(email && password) {
                alert('Login Successful! Welcome back to RECIPE Mania.');
                window.location.href = 'index.html'; // Go to home page
            }
        });
    }

    // 2. Simple Form Validation for Submit Recipe Page
    const submitRecipeForm = document.getElementById('submitRecipeForm');
    if(submitRecipeForm) {
        submitRecipeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! Your recipe has been submitted successfully for review.');
            submitRecipeForm.reset();
        });
    }

    // 3. Search Bar Interaction
    const searchInputs = document.querySelectorAll('input[type="search"], input[placeholder*="Search recipes"]');
    searchInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if(e.key === 'Enter') {
                e.preventDefault();
                if(this.value.trim() !== '') {
                    window.location.href = 'search.html';
                }
            }
        });
    });
});