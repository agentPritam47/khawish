import React, { useState } from "react";

const Recomendation = () => {
  const [activeButton, setActiveButton] = useState("rings");

  const recomendation = [
    {
      img: "",
      title: "modern",
      alt: "Modern jewelry collection",
    },
    {
      img: "",
      title: "engagement", 
      alt: "Engagement rings and jewelry",
    },
    {
      img: "",
      title: "contemporary",
      alt: "Contemporary jewelry designs",
    },
    {
      img: "",
      title: "party wear",
      alt: "Party wear jewelry collection",
    },
    {
      img: "",
      title: "casual outing",
      alt: "Casual jewelry pieces",
    },
    {
      img: "",
      title: "anniversary",
      alt: "Anniversary jewelry collection",
    },
    {
      img: "",
      title: "office wear",
      alt: "Office wear jewelry",
    },
    {
      img: "",
      title: "classic",
      alt: "Classic jewelry designs",
    },
  ];

  const ringData = [
    {
      name: "ALL RINGS",
      img: "",
      alt: "View all rings collection"
    },
    {
      name: "STATEMENT",
      img: "",
      alt: "Statement rings collection"
    },
    {
      name: "BAND",
      img: "",
      alt: "Band rings collection"
    },
    {
      name: "SOLITAIRE",
      img: "",
      alt: "Solitaire rings collection"
    },
    {
      name: "GEMSTONE",
      img: "",
      alt: "Gemstone rings collection"
    },
    {
      name: "ETERNITY",
      img: "",
      alt: "Eternity rings collection"
    },
    {
      name: "3 DIAMOND",
      img: "",
      alt: "Three diamond rings collection"
    },
  ];

  const braceletData = [
    {
      name: "oval",
      img: "",
      alt: "View all bracelets collection"
    },
    {
      name: "flexi",
      img: "",
      alt: "Statement rings collection"
    },
    {
      name: "chain",
      img: "",
      alt: "Band rings collection"
    },
    {
      name: "tennis",
      img: "",
      alt: "Solitaire rings collection"
    },
    {
      name: "all bracelets",
      img: "",
      alt: "Gemstone rings collection"
    },
  ];

  const necklaceData = [
    {
      name: "all necklace",
      img: "",
      alt: "View all necklaces collection"
    },
    {
      name: "solitaire",
      img: "",
      alt: "Statement rings collection"
    },
    {
      name: "single line",
      img: "",
      alt: "Band rings collection"
    },
    {
      name: "layered",
      img: "",
      alt: "Solitaire rings collection"
    },
    {
      name: "statement",
      img: "",
      alt: "Gemstone rings collection"
    },
    {
      name: "tennis",
      img: "",
      alt: "Gemstone rings collection"
    },
  ];

  const earringsData = [
    {
      name: "all earrings",
      img: "",
      alt: "View all earrings collection"
    },
    {
      name: "studs",
      img: "",
      alt: "Statement rings collection"
    },
    {
      name: "solitaire",
      img: "",
      alt: "Band rings collection"
    },
    {
      name: "statement",
      img: "",
      alt: "Solitaire rings collection"
    },
    {
      name: "drops",
      img: "",
      alt: "Gemstone rings collection"
    },
    {
      name: "baalies",
      img: "",
      alt: "Gemstone rings collection"
    },
    {
      name: "gemstone",
      img: "",
      alt: "Gemstone rings collection"
    },
    {
      name: "hoops & huggies",
      img: "",
      alt: "Gemstone rings collection"
    },
  ];


  return (
    <section className="min-h-[150vh] w-full bg-[#F7ECEB] font-light p-4 md:p-6" aria-label="Jewelry Recommendations">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mt-10 md:mt-20">
          Life is a Party, Bling in Style !
        </h2>
        <p className="text-center mt-4 md:mt-7 w-[90%] md:w-[60%] mx-auto leading-relaxed md:leading-normal">
          Discover versatile jewellery designed to slay your look- morning to
          midnight, your way. Bold, lightweight diamond jewellery that's easy to
          wear but impossible to ignore. Our collection is simple, playful and
          extremely modern – fully incorporating diamonds into everyday life
          without removing any elegance or style.
        </p>
        <p className="text-center mt-4 md:mt-7">
          Because who says chic can't be comfy?
        </p>

        <h1 className="text-2xl md:text-4xl text-center mt-10 md:mt-20 uppercase text-amber-950 tracking-widest">
          Browse with our Recommendation
        </h1>

        <div className="w-[95vw] md:w-[80vw] h-[15vh] md:h-[10vw] flex rounded-2xl relative left-1/2 -translate-x-1/2 bg-white shadow-md mt-6 md:mt-10 overflow-hidden" role="region" aria-label="Jewelry style recommendations carousel">
          <div className="w-[620%] sm:w-[420%] flex flex-shrink-0 justify-around items-center px-2 animate-marquee">
            {recomendation.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-2"
                role="listitem"
                aria-label={item.alt}
              >
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#F7ECEB] border-[0.25px] border-dotted border-amber-700"
                  role="img"
                  aria-label={item.alt}
                ></div>
                <p className="uppercase text-center text-base md:text-xl tracking-widest">
                  {item.title}
                </p>
              </div>
            ))}
            {recomendation.map((item, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex flex-col justify-center items-center gap-2"
                role="listitem"
                aria-label={item.alt}
              >
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#F7ECEB] border-[0.25px] border-dotted border-amber-700"
                  role="img"
                  aria-label={item.alt}
                ></div>
                <p className="uppercase text-center text-base md:text-xl tracking-widest">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-center mt-10 md:mt-20 text-2xl md:text-4xl uppercase text-amber-950 tracking-widest">
          Browse by Styles
        </h2>
        <div className="md:w-1/2 w-[95%]  md:h-20 flex items-center justify-between relative left-1/2 -translate-x-1/2 mt-2" role="tablist" aria-label="Jewelry categories">
          <button
            onClick={() => setActiveButton("rings")}
            className={`w-[10rem] button1 h-fit flex items-center justify-center bg-amber-900 rounded-full border border-dotted border-amber-900 ${
              activeButton === "rings" ? "after:scale-x-100" : ""
            }`}
            role="tab"
            aria-selected={activeButton === "rings"}
            aria-controls="rings-panel"
          >
            <p
              className={`${activeButton === "rings" ? "text-black" : "text-white"} uppercase tracking-[.2rem] p-1`}
            >
              RINGS
            </p>
          </button>
          <button
            onClick={() => setActiveButton("bracelets")}
            className={`w-[10rem] button1 h-fit flex items-center justify-center bg-amber-900 rounded-full border border-dotted border-amber-900 ${
              activeButton === "bracelets" ? "after:scale-x-100" : ""
            }`}
            role="tab"
            aria-selected={activeButton === "bracelets"}
            aria-controls="bracelets-panel"
          >
            <p
              className={`${activeButton === "bracelets" ? "text-black" : "text-white"} uppercase tracking-[.2rem] p-1`}
            >
              Bracelets
            </p>
          </button>
          <button
            onClick={() => setActiveButton("necklaces")}
            className={`w-[10rem] button1 h-fit flex items-center justify-center bg-amber-900 rounded-full border border-dotted border-amber-900 ${
              activeButton === "necklaces" ? "after:scale-x-100" : ""
            }`}
            role="tab"
            aria-selected={activeButton === "necklaces"}
            aria-controls="necklaces-panel"
          >
            <p
              className={`${activeButton === "necklaces" ? "text-black" : "text-white"} uppercase tracking-[.2rem] p-1`}
            >
              Necklaces
            </p>
          </button>
          <button
            onClick={() => setActiveButton("earrings")}
            className={`w-[10rem] button1 h-fit flex items-center justify-center bg-amber-900 rounded-full border border-dotted border-amber-900 ${
              activeButton === "earrings" ? "after:scale-x-100" : ""
            }`}
            role="tab"
            aria-selected={activeButton === "earrings"}
            aria-controls="earrings-panel"
          >
            <p
              className={`${activeButton === "earrings" ? "text-black" : "text-white"} uppercase tracking-[.2rem] p-1`}
            >
              Earrings
            </p>
          </button>
        </div>

        <div 
          className="md:w-[60%] w-[95%] md:h-[10vw] h-[15vh] bg-white rounded-2xl flex justify-center items-center relative left-1/2 -translate-x-1/2 mt-2 overflow-hidden"
          role="tabpanel"
          id={`${activeButton}-panel`}
          aria-label={`${activeButton} styles carousel`}
        >
          <div className={`w-[520%] bg-white h-full absolute sm:w-[350%] flex flex-shrink-0 justify-around items-center px-2 animate-marquee2 ${activeButton === "rings" ? "z-30" : "z-0"}`}>
            {ringData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-2"
                role="listitem"
                aria-label={item.alt}
              >
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#F7ECEB] border-[0.25px] border-dotted border-amber-700"
                  role="img"
                  aria-label={item.alt}
                ></div>
                <p className="uppercase text-center text-base tracking-widest">
                  {item.name}
                </p>
              </div>
            ))}
            {ringData.map((item, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex flex-col justify-center items-center gap-2"
                role="listitem"
                aria-label={item.alt}
              >
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#F7ECEB] border-[0.25px] border-dotted border-amber-700"
                  role="img"
                  aria-label={item.alt}
                ></div>
                <p className="uppercase text-center text-base tracking-widest">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <div className={`w-[420%] bg-white h-full absolute sm:w-[250%] flex flex-shrink-0 justify-around items-center px-2 animate-marquee2 ${activeButton === "bracelets" ? "z-30" : "z-0"}`}>
            {braceletData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-2"
                role="listitem"
                aria-label={item.alt}
              >
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#F7ECEB] border-[0.25px] border-dotted border-amber-700"
                  role="img"
                  aria-label={item.alt}
                ></div>
                <p className="uppercase text-center text-base tracking-widest">
                  {item.name}
                </p>
              </div>
            ))}
            {braceletData.map((item, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex flex-col justify-center items-center gap-2"
                role="listitem"
                aria-label={item.alt}
              >
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#F7ECEB] border-[0.25px] border-dotted border-amber-700"
                  role="img"
                  aria-label={item.alt}
                ></div>
                <p className="uppercase text-center text-base tracking-widest">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <div className={`w-[520%] bg-white h-full absolute sm:w-[350%] flex flex-shrink-0 justify-around items-center px-2 animate-marquee2 ${activeButton === "necklaces" ? "z-30" : "z-0"}`}>
            {necklaceData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-2"
                role="listitem"
                aria-label={item.alt}
              >
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#F7ECEB] border-[0.25px] border-dotted border-amber-700"
                  role="img"
                  aria-label={item.alt}
                ></div>
                <p className="uppercase text-center text-base tracking-widest">
                  {item.name}
                </p>
              </div>
            ))}
            {necklaceData.map((item, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex flex-col justify-center items-center gap-2"
                role="listitem"
                aria-label={item.alt}
              >
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#F7ECEB] border-[0.25px] border-dotted border-amber-700"
                  role="img"
                  aria-label={item.alt}
                ></div>
                <p className="uppercase text-center text-base tracking-widest">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <div className={`w-[520%] bg-white h-full absolute sm:w-[450%] flex flex-shrink-0 justify-around items-center px-2 animate-marquee2 ${activeButton === "earrings" ? "z-30" : "z-0"}`}>
            {earringsData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-2"
                role="listitem"
                aria-label={item.alt}
              >
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#F7ECEB] border-[0.25px] border-dotted border-amber-700"
                  role="img"
                  aria-label={item.alt}
                ></div>
                <p className="uppercase text-center text-base tracking-widest">
                  {item.name}
                </p>
              </div>
            ))}
            {earringsData.map((item, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex flex-col justify-center items-center gap-2"
                role="listitem"
                aria-label={item.alt}
              >
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#F7ECEB] border-[0.25px] border-dotted border-amber-700"
                  role="img"
                  aria-label={item.alt}
                ></div>
                <p className="uppercase text-center text-base tracking-widest">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recomendation;
