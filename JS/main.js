// FAQ

document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-content");

  if (!faqContainer) return; // Ensure the container exists

  faqContainer.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".faq-group-header");
    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = groupHeader.querySelector("i");

    if (!groupBody || !icon) return; // Ensure elements exist

    // Toggle icon classes
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    // Toggle visibility of the current group body
    groupBody.classList.toggle("open");

    // Close other open FAQ bodies
    const allGroups = faqContainer.querySelectorAll(".faq-group");

    allGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector(".faq-group-body");
        const otherIcon = otherGroup.querySelector(".faq-group-header i");

        if (otherGroupBody && otherIcon) {
          otherGroupBody.classList.remove("open");
          otherIcon.classList.remove("fa-minus");
          otherIcon.classList.add("fa-plus");
        }
      }
    });
  });
});


//Mobile Menu

document.addEventListener("DOMContentLoaded" , ()=> {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu"); 
  hamburgerButton.addEventListener("click",()=> mobileMenu.classList.toggle("active"));
});