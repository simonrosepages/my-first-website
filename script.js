function updateYear() {
    let id = document.getElementById('current-year');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    id.innerHTML = currentYear;
}

updateYear();