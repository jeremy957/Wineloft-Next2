import React from "react";

// Simple CSS-based fade/slide-in (replaces framer-motion)
function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setVisible(true), Math.max(0, delay * 1000));
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px)' : 'translateY(10px)',
        transition: `opacity 600ms ease ${delay}s, transform 600ms ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <FadeIn delay={0.2}>
        <h1>Welcome to Wine Loft on Franklin</h1>
      </FadeIn>
      <FadeIn delay={0.4}>
        <p>Experience fine wine, food, and ambiance.</p>
      </FadeIn>
    </main>
  );
}
