console.log("Hi there! Follow me on Twitter @kvncnls. :D");

const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item__header"
);

accordionItemHeaders.forEach((acHeader) => {
  acHeader.addEventListener("click", (event) => {
    const currentActiveACHeader = document.querySelector(
      ".accordion-item__header.active"
    );
    /* If this active element exists, AND it's not the same element as the one we clicked: */
    if (currentActiveACHeader && currentActiveACHeader !== acHeader) {
      /* Toggle OFF the active class */
      currentActiveACHeader.classList.toggle("active");
      /* Make the adjacent body's max height 0 */
      currentActiveACHeader.nextElementSibling.style.maxHeight = 0;
    }

    acHeader.classList.toggle("active");
    const acBody = acHeader.nextElementSibling;
    if (acHeader.classList.contains("active")) {
      acBody.style.maxHeight = acBody.scrollHeight + "px";
      /* scrollHeight is a property returns the entire height of an element in px, including the height that isn't viewable due to overflow  */
    } else {
      acBody.style.maxHeight = 0;
    }
  });
});
