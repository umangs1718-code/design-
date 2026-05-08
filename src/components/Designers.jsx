import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const designers = [
  {
    name: "Modani",
    role: "Lead Interior Designer",
    img: "https://www.yudiz.com/codepen/interior-design/team-1.jpg",
    bio: "Specialized in luxury modern interiors with 12+ years experience."
  },
  {
    name: "Liam Anderson",
    role: "Creative Director",
    img: "https://www.yudiz.com/codepen/interior-design/team-2.jpg",
    bio: "Visionary designer crafting timeless aesthetic experiences."
  },
  {
    name: "Olivia Bennett",
    role: "Luxury Space Planner",
    img: "https://www.yudiz.com/codepen/interior-design/team-3.jpg",
    bio: "Expert in high-end residential & boutique architecture."
  },
];

export default function Designers() {
  const designRef = useRef();
  const [flipped, setFlipped] = useState(null);

  useEffect(() => {
    const cards = designRef.current.querySelectorAll(".designer-card");

    gsap.fromTo(
      cards,
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        stagger: 0.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: designRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="designer-section" ref={designRef}>
      <div className="container">
        <section className="designer-section" id="designers" ref={designRef}></section>
        <h2 className="section-title">Our Designers</h2>

        <div className="designer-grid">
          {designers.map((designer, index) => (
            <div
              key={index}
              className={`designer-card ${flipped === index ? "flipped" : ""}`}
              onClick={() =>
                setFlipped(flipped === index ? null : index)
              }
            >
              <div className="designer-inner">

                {/* FRONT */}
                <div className="designer-front">
                  <img src={designer.img} alt={designer.name} />
                  <div className="designer-name-overlay">
                    <h3>{designer.name}</h3>
                  </div>
                </div>

                {/* BACK */}
                <div className="designer-back">
                  <h4>{designer.name}</h4>
                  <p>{designer.role}</p>
                  <span>{designer.bio}</span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
