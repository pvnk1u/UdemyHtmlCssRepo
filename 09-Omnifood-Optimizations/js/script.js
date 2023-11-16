///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  // 切换class，当存在这个class时则remove移除，不存在时则add添加
  headerEl.classList.toggle("nav-open");
});
