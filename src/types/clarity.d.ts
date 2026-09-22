export {};

declare global {
  interface Window {
    // Microsoft Clarity (src/components/Clarity.tsx). Solo existe en producción;
    // por eso siempre se llama de forma opcional (window.clarity?.(...)).
    clarity?: (...args: unknown[]) => void;
  }
}
