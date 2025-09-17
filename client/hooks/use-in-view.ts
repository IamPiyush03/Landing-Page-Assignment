import { MutableRefObject, useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit): [MutableRefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setInView(true);
      });
    }, { threshold: 0.15, rootMargin: "0px", ...(options || {}) });
    io.observe(el);
    return () => io.disconnect();
  }, [options]);

  return [ref, inView];
}
