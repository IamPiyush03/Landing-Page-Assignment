import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function FloatingCTA({ onClick }: { onClick: () => void }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setVisible(y > 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`pointer-events-none fixed bottom-5 right-5 z-50 transition-all ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
      <Button onClick={onClick} className="pointer-events-auto h-11 px-5 font-semibold shadow-lg">
        Book Now
      </Button>
    </div>
  );
}
