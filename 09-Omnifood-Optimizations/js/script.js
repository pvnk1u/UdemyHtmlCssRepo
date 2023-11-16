///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  // 切换class，当存在这个class时则remove移除，不存在时则add添加
  headerEl.classList.toggle("nav-open");
});

// 平滑滚动效果
// 查找所有带有href属性的链接元素
const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e指的是点击时的鼠标事件
    // 阻止鼠标点击时的默认事件
    e.preventDefault();
    // 获取链接的href值
    const href = link.getAttribute("href");
    console.log(href);
    // href属性没有实际值时，自动平滑滚动到顶部
    if (href === "#") {
      window.scrollTo({
        top: 20,
        behavior: "smooth",
      });
    }
    if (href !== "#" && href.startsWith("#")) {
      // 获取要跳转的元素
      const sectionEl = document.querySelector(href);
      // 平滑跳转向对应的元素
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // 关闭移动端页面导航
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
