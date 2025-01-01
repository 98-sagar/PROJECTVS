function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle('active');
}

// Optional: Close other dropdowns when one is opened
document.addEventListener('click', (event) => {
    const isDropdownClick = event.target.closest('.dropdown');
    document.querySelectorAll('.dropdown-content').forEach((dropdown) => {
        if (!isDropdownClick || !isDropdownClick.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });
});
