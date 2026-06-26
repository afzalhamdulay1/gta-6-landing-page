import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMaskSettings } from "../../constants/index";
import ComingSoon from "./ComingSoon";

const Hero = () => {
  const { initialMaskPos, initialMaskSize, maskPos, maskSize } =
    useMaskSettings();

  useGSAP(() => {
    gsap.set(".mask-wrapper", {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    });

    gsap.set(".mask-logo", { marginTop: "-100vh", opacity: 0 });

    gsap.set(".entrance-message", { marginTop: "0vh" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        scrub: 2.5,
        end: "+=200%",
        pin: true,
      },
    });

    tl.to(".fade-out", { opacity: 0, ease: "power1.inOut" })
      .to(".scale-out", {
        scale: 1.1,
        ease: "power1.inOut",
      })
      .to(
        ".mask-wrapper",
        { maskSize: maskSize, maskPosition: maskPos, ease: "sine.inOut" },
        "<+0.1",
      )
      .to(
        ".mask-overlay",
        { duration: 0.1, opacity: 1, ease: "power1.inOut" },
        "<+80%",
      )
      .to(
        ".entrance-message",
        {
          duration: 1,
          ease: "power1.inOut",
          maskImage:
            "radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)",
        },
        "<",
      );
  });

  return (
    <section className="hero-section h-dvh">
      <div className="size-full mask-wrapper relative">
        <img src="/images/fifa-bg.png" className="scale-out" alt="background" />
        <div className="absolute inset-0 bg-white opacity-0 mask-overlay pointer-events-none" />
        <img
          src="/images/hero-text.webp"
          className="title-logo fade-out"
          alt="hero-logo"
        />
        <img
          src="/images/watch-trailer.png"
          alt="trailer"
          className="trailer-logo fade-out"
        />
        <div className="play-img fade-out">
          <img src="/images/play.png" alt="play" className="w-7 ml-1" />
        </div>
      </div>

      <ComingSoon />
    </section>
  );
};

export default Hero;
