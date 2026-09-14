"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

// Lottie kutubxonasi faqat brauzerda yuklanadi
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Animatsiya JSON'lari alohida chunk'ga ajratiladi va faqat kerak bo'lganda yuklanadi
const ANIMATIONS = {
  code: () => import("../../assets/lottie/code.json"),
  study: () => import("../../assets/lottie/study.json"),
};

/**
 * Animatsiya faqat ekranga yaqinlashganda yuklanadi (lazy-load).
 * `name` — ANIMATIONS ichidagi kalit ("code" | "study").
 */
const AnimationLottie = ({ name }) => {
  const containerRef = useRef(null);
  const [animationData, setAnimationData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const load = ANIMATIONS[name];
    if (!isVisible || animationData || !load) return;

    let cancelled = false;
    load().then((mod) => {
      if (!cancelled) setAnimationData(mod.default ?? mod);
    });
    return () => {
      cancelled = true;
    };
  }, [isVisible, animationData, name]);

  return (
    <div ref={containerRef} aria-hidden="true">
      {animationData ? (
        <Lottie animationData={animationData} loop autoplay style={{ width: "95%" }} />
      ) : null}
    </div>
  );
};

export default AnimationLottie;
