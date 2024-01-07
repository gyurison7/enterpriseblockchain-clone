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

$(".btn-lang").click(function () {
  $(".select-lang").toggle();
});
$(".lang-item").click(function (e) {
  $(this).addClass("active").siblings().removeClass("active");
});

// sc-intro
let introMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".intro-description",
    start: "0% 0%",
    end: () =>
      "+=" + document.querySelector(".sc-intro").offsetHeight + " bottom", // 섹션의 높이만큼 스크롤
    scrub: true,
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
  },
  opacity: 1,
});

gsap.to(".scroll-down", {
  scrollTrigger: {
    trigger: ".sc-intro",
    start: "92% 50%",
    end: "100% 100%",
    // markers: true,
    toggleActions: "play none none reverse",
  },
  opacity: 0,
});

// sc-showcase
let showcaseMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".showcase-area.intro",
    start: "10% 0%",
    end: "100% 0%",
    scrub: true,
  },
});
showcaseMotion
  .to(".intro-text", { opacity: 1 }, "before")
  .to(".showcase-bg", { opacity: 1 }, "before")
  .to(".intro-text p:first-child", { x: 400 }, "motion")
  .to(".intro-text p:last-child", { x: -400 }, "motion")
  .to(".showcase-bg", { opacity: 0 }, "after")
  .to(".intro-text", { opacity: 0 }, "after");

let motion = gsap.timeline({
  scrollTrigger: {
    trigger: ".showcase-area.last",
    start: "0% 0%",
    end: "100% 0%",
    scrub: true,
    toggleActions: "play none none reverse",
  },
});
motion
  .to(".showcase-description", { opacity: 1 })
  .to(".showcase-bg", { opacity: 1 });

// sc-challenge
ScrollTrigger.create({
  trigger: ".sc-challenge",
  start: "0% 10%",
  end: "50% 100%",
  scrub: true,
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
  },
});
proveMotion
  .to(".box-before-prove", { width: "68%" }, "motion")
  .to(".box-after-prove", { width: "68%" }, "motion")
  .to(".prove-content p:first-child", { x: -200 }, "motion")
  .to(".prove-content p:last-child", { x: 500 }, "motion");

// sc-possible
ScrollTrigger.create({
  trigger: ".sc-possible",
  start: "0% 60%",
  end: "100% 0%",
  scrub: true,
  // markers: true,
  onEnter: function () {
    $(".container, .sc-gallery, .sc-possible").addClass("dark");
    $(".logo-img, .gnb").removeClass("black");
  },
  onLeaveBack: function () {
    $(".container, .sc-gallery, .sc-possible").removeClass("dark");
    $(".logo-img, .gnb").addClass("black");
  },
});

// possible-slide 가로 이동
gsap.to(".possible-slide", {
  scrollTrigger: {
    trigger: ".sc-possible",
    start: "0% 0%",
    end: "50% 0%",
    scrub: true,
    toggleActions: "play none none reverse",
    // markers: true,
  },
  x: "-40%",
});

// sc-banner
ScrollTrigger.refresh();
let bannerMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-banner",
    start: "0% 100%",
    end: "100% 0%",
    scrub: true,
    // markers: true,
  },
});
bannerMotion
  .from(".box-container .box:first-child", { x: -300 }, "motion")
  .from(".box-container .box:nth-child(2)", { x: -300 }, "motion")
  .from(".box-container .box:last-child", { x: 300 }, "motion")
  .to(".banner-content", { opacity: 1 }, "motion2")
  .to(".box-container .box", { filter: "blur(50px)" }, "motion2");

// sc-safe
// safe-slide 가로 이동
gsap.to(".safe-slide", {
  scrollTrigger: {
    trigger: ".safe-slide",
    start: "10% 0%",
    end: "300% 0%",
    scrub: true,
    toggleActions: "play none none reverse",
    // markers: true,
  },
  x: "-592px",
});

// safe-slide 가로 이동
let boxMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".safe-slide",
    start: "200% 0%",
    end: "700% 0%",
    scrub: true,
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
boxMotion
  .to(".safe-slide .card-item2", { x: "-440px" }, "motion")
  .to(".safe-slide .card-item3", { x: "-880px" }, "motion")
  .to(".safe-slide .card-item4", { x: "-1320px" }, "motion")
  .to(".safe-slide .icon-unlock", { opacity: 0 }, "motion")
  .to(".safe-slide .icon-lock", { opacity: 1 }, "motion");

// sc-service
let serviceMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-service",
    start: "0% 20%",
    end: "50% 0%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
serviceMotion
  .to(".sc-safe .safe-item", { opacity: 0, duration: 0 })
  .to(".sc-safe .color-card", { opacity: 0, duration: 0 })
  .to(".sc-service .color-card", { opacity: 1, duration: 0 })
  .to(".sc-service .card-text", { opacity: 1 });

// sc-service card-list 가로 이동
let cardMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-service .card-list",
    start: "20% 0%",
    end: "100% 0%",
    scrub: true,
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
cardMotion
  .to(".sc-service .card-item1", { x: "-440px" }, "motion")
  .to(".sc-service .card-item2", { x: "-880px" }, "motion")
  .to(".sc-service .card-item3", { x: "-1320px" }, "motion")
  .to(".sc-service .card-item1", { opacity: 0 }, "motion2")
  .to(".sc-service .card-item2", { opacity: 0 }, "motion2")
  .to(".sc-service .card-item3", { opacity: 0 }, "motion2")
  .to(".sc-service .service-outro", { opacity: 1, duration: 0 }, "motion2");

// sc-talent
ScrollTrigger.create({
  trigger: ".sc-talent",
  start: "0% 50%",
  end: "100% 0%",
  scrub: true,
  // markers: true,
  onEnter: function () {
    $(".sc-talent, .sc-service").addClass("light");
    $(".logo-img, .gnb").addClass("black");
  },
  onLeaveBack: function () {
    $(".sc-talent, .sc-service").removeClass("light");
    $(".logo-img, .gnb").removeClass("black");
  },
});

// sc-global
let globalMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-global",
    start: "0% 70%",
    end: "100% 0%",
    scrub: true,
    // markers: true,
  },
});
globalMotion
  .to(".box-before-global", { width: "68%" }, "motion")
  .to(".box-after-global", { width: "68%" }, "motion")
  .to(".global-content p:first-child", { x: -500 }, "motion")
  .to(".global-content p:last-child", { x: 700 }, "motion");

// finance-slide 가로 이동
gsap.to(".finance-slide", {
  scrollTrigger: {
    trigger: ".finance-slide",
    start: "10% 0%",
    end: "100% 0%",
    scrub: true,
    toggleActions: "play none none reverse",
    // markers: true,
  },
  x: "-31%",
});

// sc-creator
gsap.to(".creator-content", {
  scrollTrigger: {
    trigger: ".creator-content",
    start: "0% 20%",
    end: "100% 0%",
    scrub: true,
    toggleActions: "play reverse play reverse",
    // markers: true,
  },
  opacity: 1,
});

// smart-slide 가로 이동
gsap.to(".smart-slide", {
  scrollTrigger: {
    trigger: ".smart-slide",
    start: "10% 0%",
    end: "100% 0%",
    scrub: true,
    toggleActions: "play none none reverse",
    // markers: true,
  },
  x: "-49%",
});
