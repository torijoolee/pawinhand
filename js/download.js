(() => {
  const mockupImgElems = document.querySelectorAll(".image-container div");
  const container = document.querySelector(".image-container");
  console.log(mockupImgElems);
  console.log(container);
  let imgWidth;
  let current = 0;

  for (let i = 0; i < mockupImgElems.length; i++) {
    imgWidth = mockupImgElems[i].clientWidth;
    mockupImgElems[i].style.left = i * imgWidth + "px";

    function moveScroll() {
      current++;
      let moveContainer = parseInt(imgWidth * current);
      container.style.transform = `translateX(${-moveContainer}px)`;
      container.style.transition = ".5s";
      if (current > mockupImgElems.length - 1) {
        current = 0;
        container.style.transform = `translateX(${current}px)`;
      }
    }
  }

  setInterval(moveScroll, 3000);
})();
