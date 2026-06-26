import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const FirstVideo = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    const video = videoRef.current;
    if (!video) return;

    gsap.set(".first-vd-wrapper", { marginTop: "-150vh", opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-vd-wrapper",
        start: "top top",
        end: "+200% top",
        scrub: true,
        pin: true,
      },
    });

    tl.to(".hero-section", { delay: 0.5, opacity: 0, ease: "power1.inOut" });
    tl.to(".first-vd-wrapper", {
      opacity: 1,
      duration: 2,
      ease: "power1.inOut",
    });

    const scrollVideo = { progress: 0 };
    tl.to(
      scrollVideo,
      {
        progress: 1,
        duration: 2,
        ease: "none",
        onUpdate: () => {
          if (video.duration && !video.seeking) {
            video.currentTime = scrollVideo.progress * video.duration;
          }
        },
      },
      "<+0.3",
    );
  }, []);
  return (
    <section className="first-vd-wrapper">
      <div className="h-screen">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/ronaldo_optimized.mp4"
          className="first-vd"
          style={{
            objectPosition: "50% 0%",
          }}
        />
      </div>
    </section>
  );
};

export default FirstVideo;
