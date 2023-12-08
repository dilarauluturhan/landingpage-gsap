const tl = gsap.timeline();

tl.from(".logo, .menu-items li", {
  duration: 1,
  delay: 0.3,
  opacity: 0,
  y: 50,
  stagger: {
    amount: 0.4,
  },
});

tl.from(
  ".left-container h1",
  {
    opacity: 0,
    y: 100,
    skewY: 5,
    duration: 1,
    delay: 0.2,
    stagger: {
      amount: 0.4,
    },
  },
  "-=1"
);

tl.from(".right-container", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  delay: 0.2,
});
