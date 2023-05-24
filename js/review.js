(() => {
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const contentWrap = document.querySelector(".content-wrap");
  const reviewCon = document.querySelectorAll(".review-content");
  const dotElems = document.querySelectorAll(".review-dots li");
  let current = 0;
  const total = reviewCon.length;
  let before;

  function showNextPage() {
    contentWrap.classList.add("ani-out");

    setTimeout(() => {
      remove();
      current++;
      if (current < total) {
      } else {
        current = 0;
      }
      show();
      pageDot();

      contentWrap.classList.remove("ani-out");
    }, 300);
  }

  function showPrevPage() {
    contentWrap.classList.add("ani-out");
    setTimeout(() => {
      remove();
      current--;
      if (current >= 0) {
      } else {
        current = total - 1;
      }
      show();
      pageDot();
      contentWrap.classList.remove("ani-out");
    }, 300);
  }

  function show() {
    reviewCon[current].classList.add("On");
  }
  function remove() {
    before = document.querySelector(".review-content.On");
    if (before && before) {
      before.classList.remove("On");
    }
  }

  function pageDot() {
    dotElems[current].classList.add("On");
    dotElems[before.dataset.index].classList.remove("On");
  }
  function moveTargetPage(e) {
    const target = e.target.dataset.index;
    if (target) {
      remove();
      dotElems[before.dataset.index].classList.remove("On");
      reviewCon[target].classList.add("On");
      e.target.classList.add("On");
    }
  }

  reviewCon.forEach((item, i) => {
    item.dataset.index = i;
  });

  dotElems.forEach((item, i) => {
    item.dataset.index = i;
    item.addEventListener("click", moveTargetPage);
  });

  next.addEventListener("click", showNextPage);
  prev.addEventListener("click", showPrevPage);
})();
