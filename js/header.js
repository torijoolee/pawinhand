(() => {
  const headerBtn = document.querySelector(".button");
  const headerElem = document.querySelector(".header");
  const back = document.querySelector(".menu-bg");
  const headerCon = document.querySelector(".header-content");

  function handleCurrentBtn() {
    headerElem.classList.toggle("On");
  }
  function handleCloseMenu() {
    headerElem.classList.remove("On");
  }
  function handleHeaderCon() {
    if (window.scrollY > window.innerHeight) {
      headerCon.classList.add("On");
    } else {
      headerCon.classList.remove("On");
    }
  }
  window.addEventListener("scroll", handleHeaderCon);
  back.addEventListener("click", handleCloseMenu);
  headerBtn.addEventListener("click", handleCurrentBtn);
})();
