import React, { useEffect, useRef } from "react";
import type { ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

const SectionScrollFloat: React.FC<SectionScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "top bottom-=100",
  scrollEnd = "bottom top+=100",
  stagger = 0.03,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    // Animate the entire section
    gsap.fromTo(
      el,
      {
        willChange: "opacity, transform",
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        y: 0,
        scale: 1,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: false,
          once: true,
        },
      }
    );

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === el) {
          trigger.kill();
        }
      });
    };
  }, [
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger,
  ]);

  return (
    <div ref={containerRef} className={`w-full ${containerClassName}`}>
      {children}
    </div>
  );
};

export default SectionScrollFloat;
