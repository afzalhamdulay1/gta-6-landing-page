import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Jason = () => {
  useGSAP(() => {
    gsap.set(".jason", { marginTop: "-120vh" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".jason",
          start: "top top",
          end: "top 10%",
          scrub: 2,
        },
      })
      .to(".first-vd", { opacity: 0, duration: 1, ease: "power1.inOut" });

    gsap.to(
      ".jason .img-box",
      {
        scrollTrigger: {
          trigger: ".jason",
          start: "top center",
          end: "80% center",
          scrub: 2,
        },
        y: -300,
        duration: 1,
        ease: "power1.inOut",
      },
      "<",
    );
  });

  return (
    <section className="jason">
      <div className="max-w-lg jason-content">
        <h1>Cristiano Ronaldo</h1>
        <h2>
          He conquered Europe, then the desert, now he's looking for a new
          challenge.
        </h2>
        <p>
          Cristiano Ronaldo, the legendary number 7, has conquered every pitch
          he stepped on. From Manchester to Madrid, Turin to Riyadh, he has
          broken records and defined an era. Now, rumors place him on the sunny
          shores of Leonida, ready to show that age is just a number and the
          throne is still his.
        </p>

        <div className="jason-2">
          <img src="/images/ronaldo-1.jpg" />
        </div>
      </div>

      <div className="space-y-5 mt-96 img-box">
        <div className="jason-1">
          <img src="/images/ronaldo-2.jpg" />
        </div>
        <div className="jason-3">
          <img src="/images/ronaldo-3.avif" />
        </div>
      </div>
    </section>
  );
};

export default Jason;
