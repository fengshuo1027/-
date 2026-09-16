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
};

type CapabilityArcProps = {
  items: CapabilityItem[];
};

const CARD_TONES = [
  "#171b1d",
  "#191e20",
  "#161b1d",
  "#1a1e20",
  "#171c1e",
  "#191d1f",
];

const START_ROTATION = -34;
const TOTAL_ROTATION = -42;

function roundMotionValue(value: number, precision = 1000) {
  return Math.round(value * precision) / precision;
}

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
      className={`flex h-full w-full flex-col overflow-hidden rounded-lg border border-white/[0.18] ${className}`}
      style={{ backgroundColor: CARD_TONES[index % CARD_TONES.length] }}
    >
      <div
        aria-hidden="true"
        className="relative min-h-0 flex-1 overflow-hidden border-b border-white/[0.11]"
      >
        <span className="absolute left-5 top-5 font-mono text-xs text-cyan-200/70">
          {item.number}
        </span>

        <div className="absolute inset-x-[14%] top-[29%] h-px bg-white/[0.14]" />
        <div className="absolute inset-x-[22%] top-[48%] h-px bg-white/[0.09]" />
        <div className="absolute bottom-[22%] left-[18%] top-[22%] w-px bg-white/[0.1]" />
        <div className="absolute bottom-[18%] right-[20%] top-[38%] w-px bg-cyan-200/35" />
        <div
          className="absolute left-[28%] top-[38%] h-[18%] border-l border-t border-cyan-200/55"
          style={{ width: `${detailWidth}%` }}
        />
        <div className="absolute bottom-[18%] left-[18%] h-1.5 w-1.5 bg-cyan-200/80" />

        <span className="absolute bottom-5 right-5 font-mono text-[10px] uppercase text-white/30">
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

function ArcCard({
  item,
  index,
  globalRotation,
  stageWidth,
  stageHeight,
}: {
  item: CapabilityItem;
  index: number;
  globalRotation: MotionValue<number>;
  stageWidth: MotionValue<number>;
  stageHeight: MotionValue<number>;
}) {
  const angle = useTransform(
    [globalRotation, stageWidth],
    ([latestGlobalRotation, latestWidth]) => {
      const currentWidth = latestWidth as number;
      const angleStep = currentWidth < 1024 ? 19 : 17;
      const angleDegrees =
        (latestGlobalRotation as number) + index * angleStep;

      return (angleDegrees * Math.PI) / 180;
    },
  );

  const x = useTransform([angle, stageWidth], ([latestAngle, latestWidth]) => {
    const currentAngle = latestAngle as number;
    const currentWidth = latestWidth as number;
    const radiusX = Math.min(
      currentWidth * (currentWidth < 1024 ? 0.62 : 0.56),
      820,
    );

    return roundMotionValue(radiusX * Math.sin(currentAngle));
  });

  const y = useTransform([angle, stageHeight], ([latestAngle, latestHeight]) => {
    const currentAngle = latestAngle as number;
    const currentHeight = latestHeight as number;
    const centerY = currentHeight * 0.86;
    const radiusY = currentHeight * 0.46;

    return roundMotionValue(centerY - radiusY * Math.cos(currentAngle));
  });

  const rotate = useTransform(angle, (latestAngle) => {
    const degrees = (latestAngle * 180) / Math.PI;
    return roundMotionValue(Math.max(-16, Math.min(16, degrees * 0.48)));
  });

  return (
    <li className="absolute left-1/2 top-0">
      <motion.div
        className="w-[clamp(260px,20vw,340px)] will-change-transform"
        style={{ x, y, rotate }}
      >
        <CapabilityCard
          item={item}
          index={index}
          className="aspect-[3/4] -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>
    </li>
  );
}

export function CapabilityArc({ items }: CapabilityArcProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const stageWidth = useMotionValue(1200);
  const stageHeight = useMotionValue(800);
  const trackTop = useMotionValue(0);
  const trackDistance = useMotionValue(1);

  const { scrollY } = useScroll();
  const scrollYProgress = useTransform(
    [scrollY, trackTop, trackDistance],
    ([latestScrollY, latestTrackTop, latestTrackDistance]) => {
      const distance = Math.max(latestTrackDistance as number, 1);
      const progress =
        ((latestScrollY as number) - (latestTrackTop as number)) / distance;

      return Math.max(0, Math.min(1, progress));
    },
  );

  const rotationProgress = useTransform(
    scrollYProgress,
    [0.15, 0.95],
    [0, 1],
    { clamp: true },
  );
  const globalRotation = useTransform(
    rotationProgress,
    (progress) => START_ROTATION + progress * TOTAL_ROTATION,
  );
  const groupY = useTransform(
    [scrollYProgress, stageHeight],
    ([latestProgress, latestHeight]) => {
      const progress = latestProgress as number;
      const height = latestHeight as number;

      if (progress <= 0.15) {
        const phaseProgress = progress / 0.15;
        return roundMotionValue(height * 0.34 * (1 - phaseProgress));
      }

      if (progress <= 0.8) {
        const phaseProgress = (progress - 0.15) / 0.65;
        return roundMotionValue(-height * 0.1 * phaseProgress);
      }

      const phaseProgress = (progress - 0.8) / 0.2;
      return roundMotionValue(
        -height * 0.1 - height * 0.25 * phaseProgress,
      );
    },
  );
  const groupOpacity = useTransform(
    scrollYProgress,
    [0, 0.08],
    [0.15, 1],
    { clamp: true },
  );

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return;

    let disposed = false;
    const updateGeometry = () => {
      const trackRect = track.getBoundingClientRect();
      const stageRect = stage.getBoundingClientRect();
      stageWidth.set(stageRect.width);
      stageHeight.set(stageRect.height);
      trackTop.set(trackRect.top + window.scrollY);
      trackDistance.set(Math.max(trackRect.height - stageRect.height, 1));
    };
    updateGeometry();

    const observer = new ResizeObserver(updateGeometry);
    observer.observe(track);
    observer.observe(stage);
    window.addEventListener("resize", updateGeometry);
    void document.fonts.ready.then(() => {
      if (!disposed) updateGeometry();
    });

    return () => {
      disposed = true;
      observer.disconnect();
      window.removeEventListener("resize", updateGeometry);
    };
  }, [stageHeight, stageWidth, trackDistance, trackTop]);

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
              className="aspect-[3/4]"
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
              className="aspect-[3/4]"
            />
          </li>
        ))}
      </ul>

      <div
        ref={trackRef}
        className="relative hidden h-[360svh] motion-safe:md:block"
      >
        <div
          ref={stageRef}
          className="sticky top-0 h-[100svh] min-h-[620px] max-h-[900px] overflow-hidden"
        >
          <motion.ul
            aria-label="能力列表"
            className="relative h-full w-full will-change-transform"
            style={{ y: groupY, opacity: groupOpacity }}
          >
            {items.map((item, index) => (
              <ArcCard
                key={item.number}
                item={item}
                index={index}
                globalRotation={globalRotation}
                stageWidth={stageWidth}
                stageHeight={stageHeight}
              />
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
}
