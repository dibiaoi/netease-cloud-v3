export default {
  bind: (el, binding) => {
    // if (typeof binding.value !== "function") {
    //   throw new Error("v-throttle 不是函数");
    // }
    let timer = null;
    el.addEventListener("click", () => {
      if (!timer) binding.value();
      timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
      }, 3000);
    });
  }
};
