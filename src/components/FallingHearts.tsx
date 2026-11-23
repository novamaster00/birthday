import type { CSSProperties } from "react";

const FallingHearts = () => {
  return (
    <div className="falling-hearts">
      {Array.from({ length: 20 }).map((_, i) => (
        <span
          key={i}
          className="falling-heart"
          style={
            {
              "--position": Math.random() * 100,
              "--duration": `${7 + Math.random() * 8}s`,
              "--delay": `${-Math.random() * 15}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
};

export default FallingHearts;