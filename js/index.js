window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});


gsap.registerPlugin(ScrollTrigger);

 ScrollTrigger.matchMedia({
"(min-width: 2001px)": () => {
    gsap.to(".dm-expand-wrapper", {
      y: 20,
      width: "100vw",
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top-=10",
        end: "bottom top+=600",
        scrub: true,
        invalidateOnRefresh: true,
        markers: false
      }
    });
  },
  "(max-width: 2000px)": () => {
    gsap.to(".dm-expand-wrapper", {
      y: 0,
      width: "100vw",
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top-=10",
        end: "bottom top+=600",
        scrub: true,
        invalidateOnRefresh: true,
        markers: false
      }
    });
  },

"(max-width: 1270px)": () => {
    gsap.to(".dm-expand-wrapper", {
      y: 100,
      width: "100vw",
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top-=10",
        end: "bottom top+=600",
        scrub: true,
        invalidateOnRefresh: true,
        markers: false
      }
    });
  },
  
  "(max-width: 1024px)": () => {
    gsap.to(".dm-expand-wrapper", {
      y: -131,
      width: "100vw",
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top-=10",
        end: "bottom top+=600",
        scrub: true,
        invalidateOnRefresh: true,
        markers: false
      }
    });
  },


  /* ============ TABLET + MOBILE ============== */
  "(max-width: 1000px)": () => {
    gsap.to(".dm-expand-wrapper", {
      y: 120,
      width: "100vw",
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top-=60",
        end: "bottom top+=600",
        scrub: true,
        invalidateOnRefresh: true,
        markers: false
      }
    });
  },
  /* ============ TABLET + MOBILE ============== */
  "(max-width: 700px)": () => {
    gsap.to(".dm-expand-wrapper", {
      y: 120,
      width: "100vw",
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top-=30",
        end: "bottom top+=600",
        scrub: true,
        invalidateOnRefresh: true,
        markers: false
      }
    });
  }

});









  


  /* 1️⃣ Pin the sticky heading */
ScrollTrigger.create({
  trigger: ".sticky-left",
  start: "top+=1% top",
  end: "+=280%",
  transformY:"50%",
  pin: true,
  pinSpacing: true
});



/* HEADER + HEADING COLOR CHANGE */
/* HEADER + HEADING COLOR CHANGE */
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const logo = document.getElementById("logo");

  ScrollTrigger.create({
    trigger: "#black",
    start: "top top",
    onEnter: () => {
      logo.src = "images/Header-Large-Logo-Light.png";
    },
    onLeaveBack: () => {
      logo.src = "images/Header-Large-Logo.png";
    }
  });
});



/* CAROUSEL – full slide vertical movement */
gsap.registerPlugin();

let slideIndex = 0;
const track = document.getElementById("carouselTrack");
const slides = document.querySelectorAll(".carousel-slide");
const viewport = document.querySelector(".carousel-viewport");
const slideHeight = 420;

let isAnimating = false;
let autoTimer = null;
const AUTO_DELAY = 3000; // time between slides (ms)

function moveSlides() {
  isAnimating = true;

  gsap.to(track, {
    y: -slideIndex * slideHeight,
    duration: 0.6,
    ease: "power2.inOut",
    onComplete: () => {
      isAnimating = false;
    }
  });
}

// ---------- Autoplay ----------
function startAutoplay() {
  stopAutoplay();
  autoTimer = setInterval(() => {
    if (isAnimating) return;

    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0; // loop back to top
    }

    moveSlides();
  }, AUTO_DELAY);
}

function stopAutoplay() {
  if (autoTimer) {
    clearInterval(autoTimer);
    autoTimer = null;
  }
}

// ---------- Button controls ----------
upBtn.onclick = () => {
  stopAutoplay();
  if (isAnimating || slideIndex === 0) return;
  slideIndex--;
  moveSlides();
  startAutoplay();
};

downBtn.onclick = () => {
  stopAutoplay();
  if (isAnimating || slideIndex === slides.length - 1) return;
  slideIndex++;
  moveSlides();
  startAutoplay();
};

// ---------- Mouse wheel ----------
viewport.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    stopAutoplay();
    if (isAnimating) return;

    if (e.deltaY > 0 && slideIndex < slides.length - 1) {
      slideIndex++;
    } else if (e.deltaY < 0 && slideIndex > 0) {
      slideIndex--;
    }

    moveSlides();
    startAutoplay();
  },
  { passive: false }
);

// ---------- Touch swipe ----------
let startY = 0;

viewport.addEventListener("touchstart", (e) => {
  stopAutoplay();
  startY = e.touches[0].clientY;
});

viewport.addEventListener("touchend", (e) => {
  if (isAnimating) return;

  const endY = e.changedTouches[0].clientY;
  const diff = startY - endY;

  if (Math.abs(diff) < 50) {
    startAutoplay();
    return;
  }

  if (diff > 0 && slideIndex < slides.length - 1) {
    slideIndex++;
  } else if (diff < 0 && slideIndex > 0) {
    slideIndex--;
  }

  moveSlides();
  startAutoplay();
});

// ---------- Start autoplay on load ----------
startAutoplay();

/* STICKY PIN ONLY LARGE */
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  "(min-width: 901px)": () => {

    const sticky = document.querySelector(".sticky-left");
    const blackSection = document.querySelector(".black-section");

    ScrollTrigger.create({
      trigger: "sticky",        // use the wrapper, not the element itself
      startTrigger: "blackSection",
      start: "top center", 
      endTrigger: "carousel-section",
      end:"top bottom+=1900",
      alignItems:"center",
      pin: true,
      pinSpacing: false
    });

  }
});
function makeHeroReady() {
  document.body.classList.add("hero-ready");

  // Force full layout recalculation
  ScrollTrigger?.refresh(true);
}

// Wait for fonts + video + layout
window.addEventListener("load", async () => {
  window.scrollTo(0, 0);

  // 1️⃣ Wait for fonts
  if (document.fonts) {
    await document.fonts.ready;
  }

  // 2️⃣ Wait for video metadata
  const video = document.querySelector(".dm-expand");
  if (video && video.readyState < 1) {
    await new Promise((resolve) =>
      video.addEventListener("loadedmetadata", resolve, { once: true })
    );
  }

  // 3️⃣ Wait one paint frame
  requestAnimationFrame(() => {
    makeHeroReady();
  });
});
function setVH() {
  document.documentElement.style.setProperty(
    "--vh",
    `${window.innerHeight * 0.01}px`
  );
}

setVH();

window.addEventListener("resize", setVH);
function setVW() {
  document.documentElement.style.setProperty(
    "--vw",
    `${document.documentElement.clientWidth * 0.01}px`
  );
}

setVW();
window.addEventListener("resize", setVW);
