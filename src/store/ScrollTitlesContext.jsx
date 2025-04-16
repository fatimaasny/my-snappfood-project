import { createContext, useEffect, useRef, useState } from "react";

export const ScrollContext = createContext({
  sectionsRef: {},
  activeTitle: "",
  handleScrollTitles: () => {},
});

export default function ScrollContextProvider({ children }) {
  const sectionsRef = useRef({});
  const [activeTitle, setActiveTitles] = useState("");

  function handleScrollTitles(title) {
    const section = sectionsRef.current[title];
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (sectionsRef.current) {
        const sections = Object.entries(sectionsRef.current);
        // convert to array liek :
        //   [
        //     ['پرطرفدارها' , HTMLDOMELEMENT]
        //     ['سالاد' , HTMLDOMELEMENT]
        //     ['تخفیف' , HTMLDOMELEMENT]
        //   ]

        console.log("sections: ", sections);
        let closestTitle = "";
        let minDistance = Infinity;

        sections.forEach(([title, element]) => {
          console.log(title, element);
          const rect = element.getBoundingClientRect();

          // const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top);

          if (distance < minDistance) {
            minDistance = distance;
            closestTitle = title;
          }
        });

        setActiveTitles(closestTitle);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setActiveTitles]);

  const ctxValue = {
    sectionsRef: sectionsRef,
    activeTitle: activeTitle,
    handleScrollTitles: handleScrollTitles,
  };

  return (
    <ScrollContext.Provider value={ctxValue}>{children}</ScrollContext.Provider>
  );
}
