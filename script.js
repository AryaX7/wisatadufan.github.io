// Get all dropdown buttons
var dropdownBtns = document.querySelectorAll('.dropdown-btn');

// Add click event listener to each dropdown button
dropdownBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        // Toggle the 'active' class for the next sibling (dropdown container)
        this.nextElementSibling.classList.toggle('active');
    });
});