import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Outro from "./Outro";

const Final = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    const video = videoRef.current;
    if (!video) return;

    // Detect mobile/touch devices where video scrubbing is extremely laggy
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

    // Set initial states
    gsap.set(".final-content", { opacity: 0, scale: 1.1 });
    gsap.set(".final-message", { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".final",
        start: "top top",
        end: "+=200%", // pin for 2 full viewport heights
        scrub: true,
        pin: true,
        pinSpacing: true,
        onEnter: () => {
          if (isTouchDevice) {
            video.play().catch((err) => console.log("Video play failed:", err));
          }
        },
        onEnterBack: () => {
          if (isTouchDevice) {
            video.play().catch((err) => console.log("Video play failed:", err));
          }
        },
        onLeave: () => {
          if (isTouchDevice) {
            video.pause();
          }
        },
        onLeaveBack: () => {
          if (isTouchDevice) {
            video.pause();
          }
        },
      },
    });

    // 1. Entrance of final video
    tl.to(".final-content", {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power2.out",
    });

    // 2. Video playback logic
    if (!isTouchDevice) {
      // Smooth frame scrubbing on desktop
      const scrollVideo = { progress: 0 };
      tl.to(
        scrollVideo,
        {
          progress: 1,
          duration: 3,
          ease: "none",
          onUpdate: () => {
            if (video.duration && !video.seeking) {
              video.currentTime = scrollVideo.progress * video.duration;
            }
          },
        },
        "<+=0.5",
      );
    } else {
      // Just keep the video visible while playing on mobile
      tl.to({}, { duration: 3 });
    }

    // 3. Exit video, enter final message overlay
    tl.to(".final-content", {
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
    });

    tl.to(
      ".final-message",
      {
        opacity: 1,
        pointerEvents: "auto",
        duration: 1.5,
        ease: "power2.inOut",
      },
      "<",
    );
  });

  return (
    <section className="final relative h-dvh w-full overflow-hidden">
      <div className="final-content size-full">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/robots-trunk.mp4"
          className="size-full object-cover"
          loop
        />
      </div>
      <Outro />
    </section>
  );
};

export default Final;
