document.addEventListener("DOMContentLoaded", () => {

  // highlighting the current section in the nav

  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
 });

  const menuIcon = document.querySelector("#menu-icon");
  const closeBar = document.querySelector("#close-bar");
  const sideDiv = document.querySelector("#side-div");

  // Show the sidebar when the menu icon is clicked
  menuIcon.addEventListener("click", (event) => {
    event.preventDefault();
    menuIcon.style.display = "none" 
    sideDiv.style.display = "block"; 
  });

  // Hide the sidebar when the close bar is clicked
  closeBar.addEventListener("click", (event) => {
    event.preventDefault(); 
    sideDiv.style.display = "none";
    menuIcon.style.display = "block"
  });

  // Handling the contact button in the about section in the about card 
  document.getElementById("ContactButton").addEventListener("click", function() {
    document.getElementById("form").scrollIntoView({ behavior: "smooth" });
  });

  // handling the nav bar in the portfolio
  document.querySelectorAll('#navbar a').forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute('href').slice(1); // Get section ID
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth',
      });
      sideDiv.style.display = "none";
      menuIcon.style.display = "block";
    });
  });

  //  handling the footer part of the webpage
  document.querySelectorAll('#Downbar a').forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      const footNav = this.getAttribute('href').slice(1); // Get section ID
      document.getElementById(footNav).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });


});
