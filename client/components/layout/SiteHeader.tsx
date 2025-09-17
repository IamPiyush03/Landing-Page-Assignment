import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import CountdownBanner from "@/components/CountdownBanner";
import { Menu } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onOpenEnquiry: () => void;
}

export default function SiteHeader({ onOpenEnquiry }: HeaderProps) {
  const [openMobile, setOpenMobile] = useState(false);
  const nav = [
    { href: "#packages", label: "Packages" },
    { href: "#why", label: "Why Us" },
    { href: "#benefits", label: "Benefits" },
    { href: "#faqs", label: "FAQs" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
          <img src="/assets/LOGO.png" alt="AdBolt Digital" className="h-8 w-8" />
          <span>AdBolt</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="relative text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button className="font-semibold" onClick={onOpenEnquiry}>BOOK NOW</Button>
        </div>
        <button aria-label="Open Menu" className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded bg-secondary text-secondary-foreground" onClick={() => setOpenMobile((s) => !s)}>
          <Menu className="h-5 w-5" />
        </button>
      </div>
      {openMobile && (
        <div className="border-t border-border/60 md:hidden">
          <div className="container grid gap-2 py-3">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setOpenMobile(false)}>
                {n.label}
              </a>
            ))}
            <Button className="w-full font-semibold" onClick={() => { setOpenMobile(false); onOpenEnquiry(); }}>BOOK NOW</Button>
          </div>
        </div>
      )}
      <CountdownBanner onCta={onOpenEnquiry} />
    </header>
  );
}
