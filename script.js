const modal = document.querySelector("#materials-modal");
document.querySelectorAll(".open-materials").forEach((button) => {
  button.addEventListener("click", () => modal.showModal());
});
document.querySelector(".close-modal").addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});

document.body.classList.add("js-ready");

const animatedItems = document.querySelectorAll(
  ".section-heading, .benefit-grid article, .speaker-card, .concept-copy, .log-card, .selection-flow article, .day-card, .outcome-grid article, .safety-copy, blockquote, .fit-list p, .details dl div, .accordion details, .entry-copy, .entry-card"
);

animatedItems.forEach((item, index) => {
  item.classList.add("scroll-reveal");
  item.style.setProperty("--reveal-delay", `${(index % 4) * 75}ms`);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
);

animatedItems.forEach((item) => observer.observe(item));

const progress = document.querySelector(".scroll-progress");
window.addEventListener(
  "scroll",
  () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = height > 0 ? window.scrollY / height : 0;
    progress.style.transform = `scaleX(${ratio})`;
  },
  { passive: true }
);

document.querySelectorAll(".selection-flow article").forEach((card) => {
  card.addEventListener("mouseenter", () => card.classList.add("is-active"));
  card.addEventListener("mouseleave", () => card.classList.remove("is-active"));
});
