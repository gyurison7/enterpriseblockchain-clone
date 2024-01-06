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

gsap.to(".showcase-description", {
  scrollTrigger: {
    trigger: ".showcase-area.last",
    start: "0% 0%",
    end: "100% 0%",
    scrub: true,
    toggleActions: "play none none reverse",
  },
  opacity: 1,
});

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
  .to(".prove-box-before", { width: "68%" }, "motion")
  .to(".prove-box-after", { width: "68%" }, "motion")
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
    $(".container").addClass("dark");
    $(".sc-gallery").addClass("dark");
    $(".sc-possible").addClass("dark");
    $(".logo-img").removeClass("black");
    $(".gnb").removeClass("black");
  },
  onLeaveBack: function () {
    $(".container").removeClass("dark");
    $(".sc-gallery").removeClass("dark");
    $(".sc-possible").removeClass("dark");
    $(".logo-img").addClass("black");
    $(".gnb").addClass("black");
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
    markers: true,
  },
});
bannerMotion
  .from(".box-container .box:first-child", { x: -300 }, "motion")
  .from(".box-container .box:nth-child(2)", { x: -300 }, "motion")
  .from(".box-container .box:last-child", { x: 300 }, "motion")
  .to(".banner-content", { opacity: 1 }, "motion2")
  .to(".box-container .box", { filter: "blur(50px)" }, "motion2");

// safe-slide 가로 이동
gsap.to(".safe-slide", {
  scrollTrigger: {
    trigger: ".safe-slide",
    start: "10% 0%",
    end: "300% 0%",
    scrub: true,
    // markers: true,
  },
  x: "-10%",
});

// safe-slide 가로 이동
let boxMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".safe-slide",
    start: "200% 0%",
    end: "600% 0%",
    scrub: true,
    // markers: true,
  },
});
boxMotion
  .to(".card-item2", { x: "-100%" }, "motion")
  .to(".card-item3", { x: "-200%" }, "motion")
  .to(".card-item4", { x: "-300%" }, "motion")
  .to(".card-item2", { x: "-=40px" }, "motion")
  .to(".card-item3", { x: "-=80px" }, "motion")
  .to(".card-item4", { x: "-=120px" }, "motion")
  .to(".icon-unlock", { opacity: 0 }, "motion+=0.1")
  .to(".icon-lock", { opacity: 1 }, "motion+=0.1");
