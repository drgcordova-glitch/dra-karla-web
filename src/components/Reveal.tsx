"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

export default function Reveal({
  children,
  className = ""
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Content already inside the viewport on load never gets hidden — it renders
  // in its final state immediately, so it's never gated behind JS/hydration.
  // Only content that starts off-screen is held back and fades in on scroll,
  // exactly like before.
  const [pending, setPending] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyVisible) return;

    setPending(true);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const state = shown ? "in" : pending ? "pre" : "";
  return (
    <div ref={ref} className={`reveal ${state} ${className}`}>
      {children}
    </div>
  );
}
