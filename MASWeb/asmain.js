function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function openInquiry() {
    window.location.href = "contact.html"; // Replace with actual contact page
}

function joinNow() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScw4SJMyHcF4Ve3EIZ9fg83PPHEdCNexQ4lJRdpMYS8Ciccpw/viewform?usp=dialog");
}



