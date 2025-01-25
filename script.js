document.addEventListener("DOMContentLoaded", () => {

  const menuIcon = document.querySelector("#menu-icon");
  const closeBar = document.querySelector("#close-bar");
  const sideDiv = document.querySelector("#side-div");

  // Show the sidebar when the menu icon is clicked
  menuIcon.addEventListener("click", (event) => {
    event.preventDefault(); 
    sideDiv.style.display = "block"; 
  });

  // Hide the sidebar when the close bar is clicked
  closeBar.addEventListener("click", (event) => {
    event.preventDefault(); 
    sideDiv.style.display = "none";
  });

});