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
            // Show the new Bootstrap Modal instead of default alert
            var successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();
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

    // 4. Add More Ingredients Button
    const addIngredientBtn = document.getElementById('addIngredientBtn');
    const ingredientsContainer = document.getElementById('ingredientsContainer');

    if (addIngredientBtn && ingredientsContainer) {
        addIngredientBtn.addEventListener('click', function() {
            const newRow = document.createElement('div');
            newRow.className = 'row gx-2 mb-2 ingredient-row';
            newRow.innerHTML = `
                <div class="col-7">
                    <label class="form-label small fw-bold">Item</label>
                    <input type="text" class="form-control rounded-0" required>
                </div>
                <div class="col-5">
                    <label class="form-label small fw-bold">Amount</label>
                    <div class="d-flex align-items-center gap-1">
                        <button type="button" class="btn btn-outline-secondary btn-sm rounded-0">-</button>
                        <input type="text" class="form-control rounded-0 text-center px-1" value="1">
                        <button type="button" class="btn btn-outline-secondary btn-sm rounded-0">+</button>
                    </div>
                </div>
            `;
            ingredientsContainer.appendChild(newRow);
        });
    }

    // 5. Add More Steps Button
    const addStepBtn = document.getElementById('addStepBtn');
    const stepsContainer = document.getElementById('stepsContainer');

    if (addStepBtn && stepsContainer) {
        addStepBtn.addEventListener('click', function() {
            const newStep = document.createElement('div');
            newStep.className = 'row gx-3 mb-4 step-row';
            newStep.innerHTML = `
                <div class="col-8">
                    <label class="form-label small fw-bold">Steps Description</label>
                    <textarea class="form-control rounded-0" rows="3" required></textarea>
                </div>
                <div class="col-4">
                    <label class="form-label small fw-bold">Step Photo</label>
                    <div class="border d-flex justify-content-center align-items-center h-100" style="min-height: 80px; cursor:pointer;">
                        <i class="fas fa-arrow-up fs-3"></i>
                    </div>
                </div>
            `;
            stepsContainer.appendChild(newStep);
        });
    }
});