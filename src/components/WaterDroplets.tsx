const DROPS = [
  { left: 3,  width: 3, height: 9,  duration: 3.8, delay: 0,   opacity: 0.10 },
  { left: 8,  width: 2, height: 7,  duration: 4.5, delay: 1.2, opacity: 0.07 },
  { left: 14, width: 4, height: 11, duration: 3.2, delay: 2.8, opacity: 0.09 },
  { left: 19, width: 2, height: 8,  duration: 5.1, delay: 0.5, opacity: 0.06 },
  { left: 25, width: 3, height: 10, duration: 4.0, delay: 3.5, opacity: 0.08 },
  { left: 31, width: 2, height: 7,  duration: 3.6, delay: 1.8, opacity: 0.07 },
  { left: 37, width: 4, height: 12, duration: 4.8, delay: 0.2, opacity: 0.10 },
  { left: 43, width: 2, height: 8,  duration: 3.4, delay: 4.1, opacity: 0.06 },
  { left: 49, width: 3, height: 9,  duration: 5.3, delay: 2.2, opacity: 0.08 },
  { left: 55, width: 2, height: 7,  duration: 3.9, delay: 0.8, opacity: 0.07 },
  { left: 61, width: 4, height: 11, duration: 4.2, delay: 3.0, opacity: 0.09 },
  { left: 67, width: 2, height: 8,  duration: 3.7, delay: 1.5, opacity: 0.06 },
  { left: 73, width: 3, height: 10, duration: 5.0, delay: 2.6, opacity: 0.08 },
  { left: 79, width: 2, height: 7,  duration: 4.4, delay: 0.4, opacity: 0.07 },
  { left: 85, width: 4, height: 12, duration: 3.5, delay: 3.8, opacity: 0.10 },
  { left: 91, width: 2, height: 8,  duration: 4.7, delay: 1.0, opacity: 0.06 },
  { left: 96, width: 3, height: 9,  duration: 3.3, delay: 2.4, opacity: 0.08 },
];

const WaterDroplets = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
    {DROPS.map((drop, i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          left: `${drop.left}%`,
          top: "-16px",
          width: `${drop.width}px`,
          height: `${drop.height}px`,
          borderRadius: "50% 50% 60% 60%",
          background: "hsl(38 35% 94%)",
          opacity: drop.opacity,
          animation: `dropFall ${drop.duration}s ease-in ${drop.delay}s infinite`,
        }}
      />
    ))}
  </div>
);

export default WaterDroplets;
