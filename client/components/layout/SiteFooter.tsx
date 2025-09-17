export default function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border/60 bg-background">
      <div className="container grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold">AdBolt Digital</h3>
          <p className="mt-2 text-sm text-muted-foreground">Your brand’s story, amplified. We craft obsessions—blending strategy, design, and tech.</p>
          <div className="mt-4 flex gap-2">
            <a href="https://instagram.com/adboltdigital" className="rounded border border-border px-3 py-1.5 text-sm transition-transform hover:scale-105 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:text-white">Instagram</a>
            <a href="https://linkedin.com/company/adboltdigital" className="rounded border border-border px-3 py-1.5 text-sm transition-transform hover:scale-105 hover:bg-[#0a66c2] hover:text-white">LinkedIn</a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>Email: info@adboltdigital.com</li>
            <li>Phone: +91 954806975</li>
            <li>Web: adboltdigital.com</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Address</h4>
          <p className="mt-2 text-sm text-muted-foreground">Agra, Uttar Pradesh, India</p>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} AdBolt Digital. All rights reserved.</div>
    </footer>
  );
}
