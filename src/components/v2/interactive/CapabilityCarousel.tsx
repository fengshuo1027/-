"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

export type CapabilityItem = {
  number: string;
  title: string;
  description: string;
  details: {
    summary: string;
    related: string[];
    tools: string[];
  };
};

type CapabilityCarouselProps = {
  items: CapabilityItem[];
};

const SLOT_COUNT = 12;
const ANGLE_STEP = 360 / SLOT_COUNT;
const START_ROTATION = -15;
const END_ROTATION = 165;
const RING_TILT = -5;
const PERSPECTIVE = 1300;
const INTERACTIVE_ANGLE = 70;
const VISIBLE_ANGLE = 88;

const CARD_TONES = [
  "#191d1f",
  "#1b2022",
  "#181d1f",
  "#1c2022",
  "#191e20",
  "#1b1f21",
];

function CapabilityCard({
  item,
  index,
  className = "",
}: {
  item: CapabilityItem;
  index: number;
  className?: string;
}) {
  const detailWidth = 34 + (index % 3) * 12;

  return (
    <article
      className={`flex flex-col overflow-hidden rounded-lg border border-white/[0.2] ${className}`}
      style={{ backgroundColor: CARD_TONES[index % CARD_TONES.length] }}
    >
      <div
        aria-hidden="true"
        className="relative min-h-0 flex-1 overflow-hidden border-b border-white/[0.12]"
      >
        <span className="absolute left-5 top-5 font-mono text-xs text-cyan-200/75">
          {item.number}
        </span>

        <div className="absolute inset-x-[14%] top-[29%] h-px bg-white/[0.17]" />
        <div className="absolute inset-x-[22%] top-[48%] h-px bg-white/[0.11]" />
        <div className="absolute bottom-[22%] left-[18%] top-[22%] w-px bg-white/[0.12]" />
        <div className="absolute bottom-[18%] right-[20%] top-[38%] w-px bg-cyan-200/40" />
        <div
          className="absolute left-[28%] top-[38%] h-[18%] border-l border-t border-cyan-200/60"
          style={{ width: `${detailWidth}%` }}
        />
        <div className="absolute bottom-[18%] left-[18%] h-1.5 w-1.5 bg-cyan-200/85" />

        <span className="absolute bottom-5 right-5 font-mono text-[10px] uppercase text-white/35">
          视觉占位
        </span>
      </div>

      <div className="shrink-0 p-5 sm:p-6">
        <h3 className="text-xl font-semibold text-white sm:text-2xl">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-neutral-300">
          {item.description}
        </p>
      </div>
    </article>
  );
}

function CapabilityBack({ item, index }: { item: CapabilityItem; index: number }) {
  return (
    <article
      className="absolute inset-0 flex flex-col overflow-hidden rounded-lg border border-cyan-200/35 p-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]"
      style={{ backgroundColor: CARD_TONES[index % CARD_TONES.length] }}
    >
      <span className="font-mono text-xs text-cyan-200/75">{item.number}</span>
      <h3 className="mt-5 text-2xl font-semibold leading-tight">{item.title}</h3>

      <div className="mt-8 border-t border-white/[0.14] pt-5">
        <p className="text-xs text-neutral-400">能力说明</p>
        <p className="mt-2 text-sm leading-6 text-neutral-200">
          {item.details.summary}
        </p>
      </div>

      <div className="mt-6">
        <p className="text-xs text-neutral-400">相关能力</p>
        <p className="mt-2 text-sm leading-6 text-neutral-200">
          {item.details.related.join(" · ")}
        </p>
      </div>

      <div className="mt-auto border-t border-white/[0.14] pt-4">
        <p className="text-xs text-neutral-400">工具</p>
        <p className="mt-2 text-sm text-neutral-200">
          {item.details.tools.join(" · ")}
        </p>
      </div>
    </article>
  );
}

function normalizeAngle(angle: number) {
  return (((angle + 180) % 360) + 360) % 360 - 180;
}

function RingSlot({
  item,
  slotIndex,
  itemCount,
  radius,
  ringRotation,
}: {
  item: CapabilityItem;
  slotIndex: number;
  itemCount: number;
  radius: MotionValue<number>;
  ringRotation: MotionValue<number>;
}) {
  const slotAngle = -slotIndex * ANGLE_STEP;
  const slotTransform = useTransform(
    radius,
    (latestRadius) =>
      `rotateY(${slotAngle}deg) translateZ(${latestRadius}px)`,
  );
  const slotVisibility = useTransform(ringRotation, (rotation) =>
    Math.abs(normalizeAngle(rotation + slotAngle)) < VISIBLE_ANGLE
      ? "visible"
      : "hidden",
  );
  const slotPointerEvents = useTransform(ringRotation, (rotation) =>
    Math.abs(normalizeAngle(rotation + slotAngle)) < INTERACTIVE_ANGLE
      ? "auto"
      : "none",
  );

  return (
    <li
      aria-hidden={slotIndex >= itemCount ? true : undefined}
      className="absolute left-1/2 top-1/2 h-0 w-0 [transform-style:preserve-3d]"
    >
      <motion.div
        className="will-change-transform [transform-style:preserve-3d]"
        style={{
          transform: slotTransform,
          visibility: slotVisibility,
          pointerEvents: slotPointerEvents,
        }}
      >
        <div
          data-ring-card
          tabIndex={slotIndex < itemCount ? 0 : -1}
          className="group/flip absolute left-0 top-0 aspect-[7/10] w-[clamp(280px,23vw,360px)] -translate-x-1/2 -translate-y-1/2 rounded-lg [transform-style:preserve-3d] focus-visible:outline-2 focus-visible:outline-cyan-200/70"
        >
          <div className="relative h-full w-full [transform-style:preserve-3d] [transform:rotateY(0deg)] transition-transform duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/flip:[transform:rotateY(180deg)] group-focus/flip:[transform:rotateY(180deg)]">
            <CapabilityCard
              item={item}
              index={slotIndex % itemCount}
              className="absolute inset-0 h-full w-full [backface-visibility:hidden]"
            />
            <CapabilityBack item={item} index={slotIndex % itemCount} />
          </div>
        </div>
      </motion.div>
    </li>
  );
}

export function CapabilityCarousel({ items }: CapabilityCarouselProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const radius = useMotionValue(640);
  const scrollStart = useMotionValue(0);
  const scrollDistance = useMotionValue(1);
  const slots = [...items, ...items];

  const { scrollY } = useScroll();
  const scrollProgress = useTransform(
    [scrollY, scrollStart, scrollDistance],
    ([latestScrollY, latestStart, latestDistance]) => {
      const distance = Math.max(latestDistance as number, 1);
      const progress =
        ((latestScrollY as number) - (latestStart as number)) / distance;

      return Math.max(0, Math.min(1, progress));
    },
  );
  const ringRotation = useTransform(
    scrollProgress,
    [0, 1],
    [START_ROTATION, END_ROTATION],
    { clamp: true },
  );
  const ringTransform = useTransform(
    [ringRotation, radius],
    ([latestRotation, latestRadius]) =>
      `translateZ(-${latestRadius}px) rotateX(${RING_TILT}deg) rotateY(${latestRotation}deg)`,
  );

  useEffect(() => {
    const stage = stageRef.current;
    const carousel = carouselRef.current;
    if (!stage || !carousel) return;

    let disposed = false;
    const updateGeometry = () => {
      const stageRect = stage.getBoundingClientRect();
      const carouselRect = carousel.getBoundingClientRect();
      if (!stageRect.width || !carouselRect.width) return;

      const card = carousel.querySelector<HTMLElement>("[data-ring-card]");
      const cardWidth = card ? parseFloat(getComputedStyle(card).width) : 320;
      const calculatedRadius =
        (cardWidth / 2 / Math.tan(Math.PI / SLOT_COUNT)) * 1.08;

      radius.set(Math.min(760, Math.max(540, calculatedRadius)));
      const stickyTop = (window.innerHeight - carouselRect.height) / 2;
      scrollStart.set(stageRect.top + window.scrollY - stickyTop);
      scrollDistance.set(Math.max(stageRect.height - carouselRect.height, 1));
    };
    updateGeometry();

    const observer = new ResizeObserver(updateGeometry);
    observer.observe(stage);
    observer.observe(carousel);
    window.addEventListener("resize", updateGeometry);
    void document.fonts.ready.then(() => {
      if (!disposed) updateGeometry();
    });

    return () => {
      disposed = true;
      observer.disconnect();
      window.removeEventListener("resize", updateGeometry);
    };
  }, [radius, scrollDistance, scrollStart]);

  return (
    <div className="relative left-1/2 w-[100dvw] -translate-x-1/2">
      <ul
        aria-label="能力列表"
        className="hidden grid-cols-1 gap-4 px-5 motion-reduce:grid sm:grid-cols-2 sm:px-8 lg:grid-cols-3"
      >
        {items.map((item, index) => (
          <li key={item.number}>
            <CapabilityCard
              item={item}
              index={index}
              className="aspect-[3/4] w-full"
            />
          </li>
        ))}
      </ul>

      <ul
        aria-label="能力列表"
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] motion-reduce:hidden md:hidden [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, index) => (
          <li
            key={item.number}
            className="w-[78vw] max-w-[300px] shrink-0 snap-center"
          >
            <CapabilityCard
              item={item}
              index={index}
              className="aspect-[3/4] w-full"
            />
          </li>
        ))}
      </ul>

      <div ref={stageRef} className="relative -mt-36 hidden h-[190svh] motion-safe:md:block">
        <div
          ref={carouselRef}
          className="sticky overflow-hidden"
          style={{
            top: "calc((100svh - min(82svh, 740px)) / 2)",
            height: "min(82svh, 740px)",
            perspective: `${PERSPECTIVE}px`,
            perspectiveOrigin: "50% 45%",
          }}
        >
          <motion.ul
            aria-label="能力列表"
            className="absolute inset-0 will-change-transform [transform-style:preserve-3d]"
            style={{ transform: ringTransform }}
          >
            {slots.map((item, slotIndex) => (
              <RingSlot
                key={`${item.number}-${slotIndex}`}
                item={item}
                slotIndex={slotIndex}
                itemCount={items.length}
                radius={radius}
                ringRotation={ringRotation}
              />
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
}
