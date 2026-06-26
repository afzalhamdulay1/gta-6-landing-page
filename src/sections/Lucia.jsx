import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Lucia = () => {
  useGSAP(() => {
    gsap.set(".lucia-life", { marginTop: "-120vh" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".lucia-life",
          start: "top 10%",
          end: "top 10%",
          scrub: 2,
        },
      })
      .to(".second-vd", { opacity: 0, duration: 1, ease: "power1.inOut" });

    gsap.to(
      ".lucia-life .img-box",
      {
        scrollTrigger: {
          trigger: ".lucia-life",
          start: "top center",
          end: "80% center",
          scrub: 2,
        },
        y: -200,
        duration: 1,
        ease: "power1.inOut",
      },
      "<",
    );
  });

  return (
    <section className="lucia-life">
      <div className="flex flex-col gap-5 items-end img-box lg:1/2 ps-10 mt-96">
        <div className="lucia-1">
          <img src="/images/messi-1.avif" />
        </div>
        <div className="lucia-3">
          <img src="/images/messi-2.jpg" />
        </div>
      </div>

      <div className="lg:w-1/2 lucia-life-content">
        <div className="max-w-xl lg:ps-32 ps-10">
          <h1>Lionel Messi</h1>
          <h2>The boy from Rosario who built an empire in Miami.</h2>
          <p>
            Lionel Messi, the undisputed maestro of football, has settled in the
            sun-drenched coast of Vice City. But for the GOAT, peace was never
            an option. Navigating his legacy under the bright stadium lights, he
            remains a target for rival syndicates and ambitious rivals looking
            to claim his crown.
          </p>
        </div>

        <div className="lucia-2">
          <img src="/images/messi-cup.webp" />
        </div>

        <p className="max-w-xl lg:ps-32 ps-10">
          Behind the golden trophies and stadium cheers lies a quiet
          determination. Messi isn't just playing the game anymore — he's
          running the city, making smart plays, and ensuring his legacy is
          secured forever.
        </p>
      </div>
    </section>
  );
};

export default Lucia;
