(() => {
  let observerElems;
  let observer = new IntersectionObserver((e) => {
    e.forEach((elem) => {
      if (elem.isIntersecting) {
        elem.target.classList.add("moving");
      } else {
        elem.target.classList.remove("moving");
      }
    });
  });

  observerElems = document.querySelectorAll(".ani");
  for (let i = 0; i < observerElems.length; i++) {
    observer.observe(observerElems[i]);
  }
})();
