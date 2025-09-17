import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  onCta: () => void;
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export default function CountdownBanner({ onCta }: Props) {
  const [target, setTarget] = useState<number>(() => {
    try {
      const existing = localStorage.getItem("sb_offer_deadline");
      const parsed = existing ? parseInt(existing, 10) : NaN;
      const now = Date.now();
      if (!Number.isFinite(parsed) || parsed <= now) {
        const t = now + 3 * 24 * 60 * 60 * 1000; // 72h
        localStorage.setItem("sb_offer_deadline", String(t));
        return t;
      }
      return parsed;
    } catch {
      return Date.now() + 3 * 24 * 60 * 60 * 1000;
    }
  });
  const [now, setNow] = useState<number>(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const remaining = Math.max(0, target - now);
  useEffect(() => {
    if (remaining === 0) {
      const t = Date.now() + 3 * 24 * 60 * 60 * 1000;
      try { localStorage.setItem("sb_offer_deadline", String(t)); } catch {}
      setTarget(t);
    }
  }, [remaining]);

  const time = useMemo(() => {
    const totalSec = Math.floor(remaining / 1000);
    const days = Math.floor(totalSec / 86400);
    const hours = Math.floor((totalSec % 86400) / 3600);
    const minutes = Math.floor((totalSec % 3600) / 60);
    const seconds = totalSec % 60;
    return `${pad(days)}d:${pad(hours)}h:${pad(minutes)}m:${pad(seconds)}s`;
  }, [remaining]);

  return (
    <div className="border-t border-border/60 bg-secondary/60">
      <div className="container flex items-center justify-between gap-3 py-1.5 text-xs">
        <span className="truncate">Limited time offer — Ends in {time}</span>
        <Button size="sm" className="h-7 px-3 text-xs" onClick={onCta}>Book Now</Button>
      </div>
    </div>
  );
}
