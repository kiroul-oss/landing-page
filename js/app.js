//start global letiables
const sections = Array.from(document.querySelectorAll("section"));

const navBar = document.getElementById("navbar__list");

//end global letiable

//add navbar to layouts
for (section of sections) {
  SName = section.getAttribute("data-nav");
  SId = section.getAttribute("id");
  listItem = document.createElement("li");
  listItem.innerHTML = `<a class="menu__link" href="#${SId}">${SName}</a>`;

  //add list items to navbar
  navBar.appendChild(listItem);
}

//start H-function

function sectionView(element) {
  return Math.round(
    element.getBoundingClientRect().top <= 200 &&
      element.getBoundingClientRect().top >= -100,
    2
  );
}

function addActiveClass(element) {
  element.classList.add("your-active-class");
  let secid = sec.id.slice(-1) - 1;
  navBar.childNodes[secid].classList.add("my-class");
}

function removeActiveClass(element) {
  element.classList.remove("your-active-class");
  let secid = sec.id.slice(-1) - 1;
  navBar.childNodes[secid].classList.remove("my-class");
}

//End H-function

//Add the Event
document.addEventListener("scroll", function () {
  for (sec of sections) {
    if (sectionView(sec)) {
      addActiveClass(sec);
    } else {
      removeActiveClass(sec);
    }
  }
});

document.querySelectorAll("li a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let currentId = e.target.attributes.href.value;
    let sec = document.querySelector(currentId);
    let secPos = sec.offsetTop;
    window.scroll({
      top: secPos,
      behavior: "smooth",
    });
  });
});
