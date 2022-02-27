function activateNav(navlink) {
  var links = [...document.getElementsByClassName("navlink")];
  links.forEach((e) => {
    e.classList.remove("active");
  });
  navlink.classList.add("active");
}
