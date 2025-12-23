function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (!lightbox || !lightboxImg) return;

  lightboxImg.src = img.src;
  lightbox.classList.add("show");
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  lightbox.classList.remove("show");
}

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".navbar nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
