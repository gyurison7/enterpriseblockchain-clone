// header
ScrollTrigger.create({
  trigger: "body",
  start: "90% 0%",
  end: "100% 100%",
  scrub: true,
  onEnter: function () {
    gsap.to(".header", {
      duration: 0.5,
      y: 0,
    });
  },
  onLeaveBack: function () {
    gsap.to(".header", {
      duration: 0.5,
      y: "-100%",
    });
  },
});

// gnb
$(".gnb .btn-lang").click(function () {
  $(".gnb .select-lang").toggle();
});
$(".gnb .lang-item").click(function (e) {
  $(this).addClass("active").siblings().removeClass("active");
});
const selectLang = document.querySelector(".gnb .select-lang");
ScrollTrigger.create({
  onUpdate: (self) => {
    if (selectLang.style.display === "block") {
      selectLang.style.display = "none";
    }
  },
});

// sc-intro
const introMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-intro",
    start: "0% 0%",
    end: "100% 100%",
    scrub: true,
  },
});
document.querySelectorAll(".intro-description p").forEach((elem, index, array) => {
  introMotion.to(elem, { opacity: 1 });
  if (index !== array.length - 1) {
    // 마지막 요소를 제외한 모든 요소
    if (index === 0) {
      // 첫번째 요소
      introMotion.to(".sc-intro .intro-wrapper", { "--opacity": 1 }); // 배경 dimm 처리
    }
    introMotion.to(elem, { opacity: 0 });
  }
});

gsap.to(".sc-intro .down-arrow", {
  scrollTrigger: {
    trigger: ".sc-showcase",
    start: "0% 100%",
    end: "100% 100%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
});

// sc-showcase
const showcaseMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-showcase",
    start: "0% 0%",
    end: "100% 100%",
    scrub: true,
  },
});
showcaseMotion
  .to(".sc-showcase .showcase-wrapper", { "--opacity": 1 }, "a")
  .to(".sc-showcase .description1", { opacity: 1 }, "a")
  .to(".sc-showcase .description1 p:first-child", { xPercent: 100 }, "b")
  .to(".sc-showcase .description1 p:last-child", { xPercent: -100 }, "b")
  .to(".sc-showcase .showcase-wrapper", { "--opacity": 0 }, "c")
  .to(".sc-showcase .description1", { opacity: 0 }, "c")
  .to(".sc-showcase .img:nth-child(1)", { height: 0 })
  .to(".sc-showcase .img:nth-child(2)", { height: 0 })
  .to(".sc-showcase .showcase-wrapper", { "--opacity": 1 }, "d")
  .to(".sc-showcase .description2", { opacity: 1 }, "d");

// sc-portfolio
ScrollTrigger.create({
  trigger: ".sc-portfolio",
  start: "0% 10%",
  end: "50% 100%",
  scrub: true,
  onEnter: function () {
    $(".logo-img, .gnb").addClass("black");
  },
  onLeaveBack: function () {
    $(".logo-img, .gnb").removeClass("black");
  },
});

// sc-possible
ScrollTrigger.create({
  trigger: ".sc-possible",
  start: "0% 60%",
  end: "100% 0%",
  scrub: true,
  // markers: true,
  onEnter: function () {
    $("body").addClass("dark");
    $(".logo-img, .gnb").removeClass("black");
  },
  onLeaveBack: function () {
    $("body").removeClass("dark");
    $(".logo-img, .gnb").addClass("black");
  },
});

// possible-slide 가로 이동
gsap.to(".sc-possible .possible-slide", {
  scrollTrigger: {
    trigger: ".sc-possible",
    start: "0% 0%",
    end: "50% 0%",
    scrub: true,
    invalidateOnRefresh: true, // function을 쓰려면 넣어줘야 한다.
    // markers: true,
  },
  x: function () {
    return -$(".sc-possible .inner-slide").outerWidth() - 100; // .inner-slide의 width만큼 이동
  },
});

// sc-banner
gsap.set(".sc-banner .box1", { x: -300 });
gsap.set(".sc-banner .box2", { x: -300 });
gsap.set(".sc-banner .box3", { x: 300 });
const bannerMotion1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-banner",
    start: "0% 100%",
    end: "100% 100%",
    scrub: true,
    // markers: true,
  },
});
bannerMotion1
  .to(".sc-banner .box1", { x: 0 }, "a")
  .to(".sc-banner .box2", { x: 0 }, "a")
  .to(".sc-banner .box3", { x: 0 }, "a");

const bannerMotion2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-banner",
    start: "0% 40%",
    end: "100% 40%",
    scrub: true,
    // markers: true,
    onEnter: function () {
      $(".sc-banner .box-wrapper").addClass("filter");
    },
    onLeaveBack: function () {
      $(".sc-banner .box-wrapper").removeClass("filter");
    },
  },
});
bannerMotion2.to(".sc-banner .banner-content", { opacity: 1 });

// sc-safe safe-slide 가로 이동
const safeMotion1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-safe",
    start: "0% 0%",
    end: "100% 100%",
    scrub: true,
    invalidateOnRefresh: true,
    // markers: true,
  },
});
safeMotion1
  .to(".sc-safe .safe-slide", {
    x: function () {
      return -$(".sc-safe .common-title").outerWidth();
    },
  })
  .to(".sc-safe .card-item2", { x: "-440px" }, "a")
  .to(".sc-safe .card-item3", { x: "-880px" }, "a")
  .to(".sc-safe .card-item4", { x: "-1320px" }, "a");

const safeMotion2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-safe",
    start: "50% 100%",
    end: "100% 100%",
    scrub: true,
    // markers: true,
  },
});
safeMotion2.to(".sc-safe .icon-unlock", { opacity: 0 }).to(".sc-safe .icon-lock", { opacity: 1 });

// sc-better
ScrollTrigger.create({
  trigger: ".sc-better",
  start: "0% 0%",
  end: "50% 0%",
  // markers: true,
  onEnter: function () {
    $(".sc-safe").addClass("hide");
    $(".sc-better").removeClass("hide");
  },
  onLeaveBack: function () {
    $(".sc-safe").removeClass("hide");
    $(".sc-better").addClass("hide");
  },
});

gsap.to(".sc-better .color-text", {
  scrollTrigger: {
    trigger: ".sc-better",
    start: "0% 100%",
    end: "50% 100%",
    scrub: true,
    // markers: true,
  },
  opacity: 1,
});

// sc-slider
ScrollTrigger.create({
  trigger: ".sc-slider",
  start: "0% 0%",
  end: "100% 0%",
  // markers: true,
  onEnter: function () {
    $(".sc-better").addClass("hide");
    $(".sc-slider .color-card").removeClass("hide");
  },
  onLeaveBack: function () {
    $(".sc-better").removeClass("hide");
    $(".sc-slider .color-card").addClass("hide");
  },
});
const sliderMotion1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-slider",
    start: "0% 20%",
    end: "100% 0%",
    // markers: true,
  },
});
sliderMotion1
  .to(".sc-slider .card-list li", { "--filter": "url(#sharpBlur)" }, "a")
  .to(".sc-slider .card-content", { opacity: 1 }, "a");

// sc-slider 가로 이동
const sliderMotion2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-slider",
    start: "10% 0%",
    end: "100% 100%",
    scrub: true,
    // markers: true,
  },
});
sliderMotion2
  .to(".sc-slider .card-item2", { x: "-440px" }, "a")
  .to(".sc-slider .card-item3", { x: "-880px" }, "a")
  .to(".sc-slider .card-item4", { x: "-1320px" }, "a");

// sc-outro
ScrollTrigger.create({
  trigger: ".sc-outro",
  start: "0% 0%",
  end: "100% 0%",
  // markers: true,
  onEnter: function () {
    $(".sc-slider").addClass("hide");
    $(".sc-outro").removeClass("hide");
  },
  onLeaveBack: function () {
    $(".sc-slider").removeClass("hide");
    $(".sc-outro").addClass("hide");
  },
});

const outroMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-outro",
    start: "0% 0%",
    end: "100% 0%",
    scrub: true,
    // markers: true,
  },
});
outroMotion
  .to(".sc-outro .col-right", { opacity: 1 }, "a")
  .to(".sc-outro .col-left .color-card", { "--opacity": 1 }, "a");

// sc-change
ScrollTrigger.create({
  trigger: ".sc-change",
  start: "0% 50%",
  end: "100% 0%",
  scrub: true,
  // markers: true,
  onEnter: function () {
    $("body").removeClass("dark");
    $(".logo-img, .gnb").addClass("black");
  },
  onLeaveBack: function () {
    $("body").addClass("dark");
    $(".logo-img, .gnb").removeClass("black");
  },
});

$(".side-animation").each(function () {
  const sideAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "0% 70%",
      end: "100% 90%",
      scrub: true,
      // markers: true,
    },
  });
  let before, after;
  if ($(this).attr("class").includes("value")) {
    before = -172;
    after = 134;
  } else {
    before = -114;
    after = 120;
  }
  sideAnimation
    .from($(this).find("[class*='box-before-']"), { xPercent: 100 }, "a")
    .from($(this).find("[class*='box-after-']"), { xPercent: -100 }, "a")
    .to($(this).find(".title p:first-child span"), { xPercent: before }, "a")
    .to($(this).find(".title p:last-child span"), { xPercent: after }, "a");
});

// sc-finance
const financeMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-finance",
    start: "0% 20%",
    end: "100% 0%",
    // markers: true,
  },
});
financeMotion.to(".sc-finance .card-content", { opacity: 1 }, "a");
financeMotion.to(".sc-finance .card-item3", { "--filter": "url(#sharpBlur)" }, "a");

// finance-slide 가로 이동
gsap.to(".sc-finance .finance-slide", {
  scrollTrigger: {
    trigger: ".sc-finance",
    start: "0% 0%",
    end: "100% 100%",
    scrub: true,
    invalidateOnRefresh: true,
    // markers: true,
    toggleClass: { targets: $(".slide-bottom"), className: "on" },
    onUpdate: function (self) {
      if (self.progress >= 0.5) {
        $(".animation-txt").text("미래금융");
      } else {
        $(".animation-txt").text("전통금융");
      }
    },
  },
  xPercent: -100,
  x: function () {
    return window.innerWidth;
  },
});

// sc-creator
gsap.to(".sc-creator .creator-content", {
  scrollTrigger: {
    trigger: ".sc-creator",
    start: "0% 20%",
    end: "100% 0%",
    scrub: true,
    // markers: true,
  },
  opacity: 1,
});

// sc-smart
const smarteMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-smart",
    start: "0% 20%",
    end: "100% 0%",
    // markers: true,
  },
});
smarteMotion.to(".sc-smart .card-content", { opacity: 1 }, "a");
smarteMotion.to(
  ".sc-smart .card-item1",
  {
    "--filter": "url(#sharpBlur)",
  },
  "a"
);

// smart-slide 가로 이동
gsap.to(".sc-smart .smart-slide", {
  scrollTrigger: {
    trigger: ".sc-smart",
    start: "10% 0%",
    end: "100% 100%",
    scrub: true,
    invalidateOnRefresh: true,
    // markers: true,
  },
  xPercent: -100,
  x: function () {
    return window.innerWidth;
  },
});

// infinite-banner
const infiniteMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".infinite-banner",
    start: "100% 90%",
    end: "100% 100%",
    toggleActions: "play none none reverse",
    // markers: true,
    onEnterBack: () => $(".infinite-banner").removeClass("on"),
  },
});
infiniteMotion
  .to(".infinite-banner", { y: "-100%" })
  .call(() => $(".infinite-banner").addClass("on"));

// scroll-top
const scrollHeight = $(".sc-intro").offset().top + $(".sc-intro").outerHeight();
ScrollTrigger.create({
  onUpdate: (self) => {
    if (window.scrollY >= scrollHeight && self.direction === -1) {
      gsap.to(".scroll-top", { opacity: 1 });
    } else {
      gsap.to(".scroll-top", { opacity: 0 });
    }
  },
});
