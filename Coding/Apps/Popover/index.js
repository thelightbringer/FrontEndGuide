init();

function init() {
  const popOvers = document.querySelectorAll("[data-popover=true]");
  if (!popOvers.length) {
    console.log("## NO POPVER FOUND");
    return;
  }
  let timer;

  const initPopover = function (popover) {
    let { trigger, content, delay, direction } = popover.dataset;
    const popInfo = document.createElement("div");
    popInfo.classList.add("popover", "hidden", direction);
    popInfo.innerText = content;
    popover.append(popInfo);

    if (trigger === "hover") {
      popover.addEventListener("mouseover", (e) => {
        timer = addDelay(() => popInfo.classList.remove("hidden"), delay);
      });

      popover.addEventListener("mouseout", (e) => {
        timer = addDelay(() => popInfo.classList.add("hidden"), delay);
      });
    } else if (trigger === "click") {
      popover.addEventListener("click", (e) => {
        timer = addDelay(() => popInfo.classList.toggle("hidden"), delay);
      });
    }
  };

  const addDelay = function (cb, _delay) {
    if (timer) {
      clearTimeout(timer);
      timer = "";
    }
    if (_delay) {
      timer = setTimeout(cb, _delay);
    } else {
      cb();
    }
    return timer;
  };

  popOvers.forEach((p) => initPopover(p));
}
