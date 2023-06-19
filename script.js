const img = document.querySelectorAll("img");

const observer = new IntersectionObserver(
  (entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      console.log("kek");
      let target = entry.target;
      target.classList.toggle("show", entry.isIntersecting);

      //   comment the if statement to have animations continue to play when scrolling

      if (entry.isIntersecting) {
        observer.unobserve(target);
      }
    });
  },
  {
    // threshold => lazy load images based on how much is visible on screen ...
    threshold: 1,
    // basically shrinks container
    rootMargin: "-100px",
    // root is the container
    // root: => container element
  }
);

// cards.forEach((card) => {
//   observer.observe(card);
// });

// data expanders

const dataExpanders = [...document.querySelectorAll("[data-toggle]")];

dataExpanders.forEach((expander) => {
  let expanderAttribute = expander.getAttribute("data-target");
  let expanderTarget = document.querySelector(
    `[data-target="${expanderAttribute}"]`
  );

  let htmlElement = document.querySelector("html");

  expander.addEventListener("click", (e) => {
    let currentBtnElement = e.currentTarget;

    if (currentBtnElement.classList.contains("active")) {
      currentBtnElement.classList.remove("active");
      expanderTarget.classList.remove("active");
      htmlElement.classList.add("js-data-toggled");
    } else if (!currentBtnElement.classList.contains("active")) {
      currentBtnElement.classList.add("active");
      expanderTarget.classList.add("active");
      htmlElement.classList.remove("js-data-toggled");
    }
  });
});
