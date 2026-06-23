import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const SecondVideo = () => {
  const videoRef = useRef();

  useGSAP(() => {
    const video = videoRef.current;
    if (!video) return;

    gsap.set(".lucia", { marginTop: "-60vh", opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".lucia",
        start: "top top",
        end: "+=200%",
        scrub: 2,
        pin: true,
      },
    });

    tl.to(".lucia", { opacity: 1, duration: 2, ease: "sine" });

    // Use a progress proxy (0 to 1) so we don't need video.duration during creation
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
      "<",
    );
  });

  return (
    <section className="lucia">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/video2-high.mp4"
          className="size-full object-cover second-vd"
          style={{
            objectPosition: "15% 0%",
          }}
        />
      </div>
    </section>
  );
};

export default SecondVideo;
