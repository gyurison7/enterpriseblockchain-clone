// header
ScrollTrigger.create({
  trigger: "body",
  start: "90% 0%",
  end: "100% 100%",
  scrub: true,
  // markers: true,
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

// sc-intro
let introMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".intro-description",
    start: "0% 0%",
    end: () =>
      "+=" + document.querySelector(".sc-intro").offsetHeight + " bottom", // 섹션의 높이만큼 스크롤
    scrub: true,
    // markers: true,
  },
});
document
  .querySelectorAll(".intro-description .description-text")
  .forEach((elem, index, array) => {
    introMotion.to(elem, { opacity: 1 });
    if (index < array.length - 1) {
      introMotion.to(elem, { opacity: 0 });
    }
  });

// sc-intro-bg
gsap.to(".sc-intro-bg", {
  scrollTrigger: {
    trigger: ".sc-intro",
    start: "0% 0%",
    end: () =>
      "+=" + document.querySelector(".sc-intro").offsetHeight + " bottom",
    scrub: true,
    toggleActions: "play none none reverse",
    // markers: true
  },
  opacity: 1,
});

// sc-showcase
let showcaseMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".showcase-area.intro",
    start: "10% 0%",
    end: "100% 0%",
    scrub: true,
    // markers: true,
  },
});
showcaseMotion
  .to(".intro-text", { opacity: 1 }, "before")
  .to(".showcase-bg", { opacity: 1 }, "before")
  .to(".intro-text p:first-child", { x: 400 }, "motion")
  .to(".intro-text p:last-child", { x: -400 }, "motion")
  .to(".showcase-bg", { opacity: 0 }, "after")
  .to(".intro-text", { opacity: 0 }, "after");

gsap.to(".showcase-description", {
  scrollTrigger: {
    trigger: ".showcase-area.last",
    start: "0% 0%",
    end: "100% 0%",
    scrub: true,
    toggleActions: "play none none reverse",
    // markers: true,
  },
  opacity: 1,
});

// sc-challenge
ScrollTrigger.create({
  trigger: ".sc-challenge",
  start: "0% 10%",
  end: "50% 100%",
  scrub: true,
  // markers: true,
  onEnter: function () {
    $(".logo-img").addClass("black");
    $(".gnb").addClass("black");
  },
  onLeaveBack: function () {
    $(".logo-img").removeClass("black");
    $(".gnb").removeClass("black");
  },
});

// sc-prove
let proveMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-prove",
    start: "0% 70%",
    end: "100% 0%",
    scrub: true,
    // markers: true,
  },
});
proveMotion.to(".prove-box-before", { width: "68%" }, "motion");
proveMotion.to(".prove-box-after", { width: "68%" }, "motion");
proveMotion.to(".prove-content p:first-child", { x: -200 }, "motion");
proveMotion.to(".prove-content p:last-child", { x: 500 }, "motion");

// sc-possible
ScrollTrigger.create({
  trigger: ".sc-possible",
  start: "0% 60%",
  end: "50% 50%",
  scrub: true,
  // markers: true,
  onEnter: function () {
    $(".sc-gallery").addClass("dark");
    $(".sc-possible").addClass("dark");
    $(".logo-img").removeClass("black");
    $(".gnb").removeClass("black");
  },
  onLeaveBack: function () {
    $(".sc-gallery").removeClass("dark");
    $(".sc-possible").removeClass("dark");
    $(".logo-img").addClass("black");
    $(".gnb").addClass("black");
  },
});

gsap.to(".possible-wrapper", {
  scrollTrigger: {
    trigger: ".sc-possible",
    start: "5% 5%",
    end: () =>
      "+=" + document.querySelector(".sc-possible").offsetHeight + "px", // 세로 스크롤 길이에 따른 종료 지점
    scrub: true,
    toggleActions: "play none none reverse",
    markers: true,
  },
  x: () =>
    -document.querySelector(".possible-wrapper").offsetWidth +
    window.innerWidth +
    "px", // 가로로 이동할 거리
});
