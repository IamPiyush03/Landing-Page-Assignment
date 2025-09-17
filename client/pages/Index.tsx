import { useEffect, useRef, useState } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import EnquiryDialog from "@/components/EnquiryDialog";
import PricingCard from "@/components/PricingCard";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Sparkles, Target, Image, Calendar, ShoppingCart, DollarSign, Users, BarChart3, Palette, MessageCircle, Video, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import FloatingCTA from "@/components/FloatingCTA";

function RevealText({ text }: { text: string }) {
  const container = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
  } as const;
  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  } as const;
  return (
    <motion.h1
      className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.6 }}
    >
      {text.split(" ").map((w, i) => (
        <motion.span key={i} className="inline-block" variants={item}>
          {w+" "}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export default function Index() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const openEnquiry = (plan?: string) => {
    if (plan) setSelectedPlan(plan); else setSelectedPlan(null);
    setEnquiryOpen(true);
  };

  useEffect(() => {
    // no-op initial hooks kept for extendability
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader onOpenEnquiry={() => openEnquiry()} />

      {/* Hero */}
      <section
        className="relative border-b border-border/60 bg-[radial-gradient(1200px_600px_at_20%_-20%,hsl(var(--accent)/0.25),transparent),radial-gradient(1000px_500px_at_90%_-10%,hsl(var(--primary)/0.25),transparent)] bg-fixed bg-[length:200%_200%] animate-gradient-shift"
        style={{ backgroundImage: 'url(/client/assets/BGimage.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container grid gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <RevealText text="Grow Your Business with Result-Driven Social Media Management" />
            <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">Struggling with low engagement, no sales, and outdated content? We help local businesses, startups & established brands build a powerful online presence with affordable, high-impact social media packages. Stop worrying about what to post. We handle everything – strategy, design, reels, ads, and growth hacks.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button className="h-12 px-8 text-base font-semibold" onClick={() => openEnquiry()}>BOOK NOW</Button>
              <a href="#packages" className="text-sm text-muted-foreground hover:text-foreground">See Packages</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative mx-auto h-64 w-full max-w-md rounded-xl border border-border/60 bg-gradient-to-br from-secondary to-background p-4 shadow-xl md:h-80">
              <div className="grid h-full w-full place-items-center rounded-lg border border-border/50 bg-background/60">
                <img src="/client/assets/Agency.png" alt="Agency" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="container py-16 md:py-24">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">Packages</h2>
          <p className="mt-2 text-muted-foreground">Choose the plan that fits your goals. Cancel anytime.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { key: "Basic Pass", icon: Video, node: (
              <PricingCard
                title="Basic Pass"
                price="₹7,990"
                features={[
                  "Total 6 reels",
                  "Total 8 posts ( 2 per week)",
                  "Total 8 story designs per month (2 per week)",
                  "Caption writing + hashtag research",
                  "1 report per month with basic insights",
                ]}
                onChoose={() => openEnquiry("Basic Pass")}
                icon={Video}
              />
            )},
            { key: "Standard Pass", icon: Calendar, node: (
              <PricingCard
                title="Standard Pass"
                price="₹11,990"
                features={[
                  "Total 12 posts & carousels (3/week)",
                  "Total 12 stories per month ( 3 /week)",
                  "Total 10 reels",
                  "Reel ideas + basic scriptwriting",
                  "All posts aligned with brand guidelines",
                  "1 report per month with basic insights",
                  "Weekly content calenders",
                ]}
                highlighted
                onChoose={() => openEnquiry("Standard Pass")}
                icon={Calendar}
              />
            )},
            { key: "Premium Pass", icon: TrendingUp, node: (
              <PricingCard
                title="Premium Pass"
                price="₹17,990"
                features={[
                  "Total 24 Stories",
                  "Total 16 Reels",
                  "20 Posts Trends related",
                  "Content calendar",
                  "Advanced reel editing + scripting",
                  "Content strategy, Brand Building",
                  "Comment, DM, and inbox management",
                  "Influencer collaborations (coordination only)",
                  "Ad campaign strategy + setup ( According to your budget )",
                  "Weekly performance + strategy calls",
                  "Monthly strategy & goals roadmap",
                  "Custom Highlight Covers",
                  "All posts aligned with brand guidelines & brand tone",
                ]}
                onChoose={() => openEnquiry("Premium Pass")}
                icon={TrendingUp}
              />
            )}
          ].map((item, idx) => {
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.12 }}
              >
                {item.node}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="border-y border-border/60 bg-secondary/40 py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-extrabold md:text-4xl">Why Choose Us?</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">Trusted by growing brands for performance and design.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { text: "We convert your photos & clips into professional, trending content", icon: Image },
              { text: "Consistent posting that keeps your brand active & visible", icon: Calendar },
              { text: "Sales-focused strategy, not just likes & followers", icon: ShoppingCart },
              { text: "Affordable packages starting from just ₹7,999/month", icon: DollarSign },
              { text: "Trusted by cafes, gyms, clinics, salons, boutiques & SMEs", icon: Users },
              { text: "Clear reporting you can act on", icon: BarChart3 }
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.text}
                  className="flex items-start gap-3 rounded-lg border border-border/60 bg-background p-4"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <IconComponent className="mt-1 h-5 w-5 text-primary" />
                  <p className="text-sm text-foreground/90">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section id="benefits" className="container py-16 md:py-24">
        <h2 className="text-3xl font-extrabold md:text-4xl">What You’ll Get With Every Package</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            { title: "Customized strategy for your niche", desc: "", icon: Target },
            { title: "Branded, high-quality designs", desc: "", icon: Palette },
            { title: "Consistent growth with tested hacks", desc: "", icon: TrendingUp },
            { title: "Dedicated support team", desc: "", icon: Users },
          ].map((f, i) => {
            const IconComponent = f.icon;
            return (
              <motion.div
                key={f.title}
                className="rounded-lg border border-border/60 bg-secondary p-5"
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-2 text-sm font-semibold"><IconComponent className="h-4 w-4 text-primary" /> {f.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="border-y border-border/60 bg-secondary/40 py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-extrabold md:text-4xl">FAQs</h2>
          <div className="mt-6 rounded-lg border border-border/60 bg-background p-2">
            <Accordion type="single" collapsible>
              <AccordionItem value="q1">
                <AccordionTrigger className="px-4">Do I need to provide content?</AccordionTrigger>
                <AccordionContent className="px-4 text-muted-foreground">No, we handle everything – strategy, design, captions, hashtags, and posting.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="px-4">Can I upgrade my package later?</AccordionTrigger>
                <AccordionContent className="px-4 text-muted-foreground">Yes, you can start small and upgrade anytime as your business grows.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="px-4">Will I get sales from this?</AccordionTrigger>
                <AccordionContent className="px-4 text-muted-foreground">We focus on brand visibility + lead generation. With the right ad budget, we drive actual customers.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="px-4">What if I want custom requirements?</AccordionTrigger>
                <AccordionContent className="px-4 text-muted-foreground">We also offer custom packages tailored to your brand’s needs.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container py-10">
        <div className="flex flex-col items-center justify-between gap-4 rounded-lg border border-border/60 bg-gradient-to-r from-accent to-primary/70 p-6 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold">Limited Slots Available – Don’t Miss Out!</h3>
            <p className="text-sm text-foreground/90">We work with limited clients each month to maintain quality. Entry package starts at just ₹7,999/month.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" className="bg-background hover:bg-secondary" onClick={() => openEnquiry()}>Book Your Slot Today!</Button>
            <Button onClick={() => openEnquiry()}>DM us now to get started</Button>
          </div>
        </div>
      </section>

      {/* Founder */}
      <motion.section
        className="container py-16 md:py-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
      >
        <motion.h2
          className="text-3xl font-extrabold md:text-4xl relative"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ amount: 0.2 }}
        >
          Company & Founder
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ amount: 0.2 }}
            className="absolute bottom-0 left-0 h-[3px] bg-red-500"
          />
        </motion.h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">At AdBolt Digital, we craft bold, scroll‑stopping content and deliver measurable ROI—not just likes. Based in Agra, we blend creativity, strategy, and tech to build brands that connect, convert, and grow.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-[280px_1fr]">
          <motion.div
            className="group overflow-hidden rounded-lg border border-border/60 bg-secondary p-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,59,48,0.6)" }}
            viewport={{ amount: 0.2 }}
          >
            <img src="/client/assets/Vishal Verma Founder.jfif" alt="Founder Vishal Verma" className="h-36 w-full rounded object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="mt-3">
              <div className="font-semibold">Vishal Verma</div>
              <div className="text-sm text-muted-foreground">Founder & CEO</div>
            </div>
          </motion.div>
          <motion.div
            className="rounded-lg border border-border/60 bg-secondary p-5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ amount: 0.2 }}
          >
            <div className="grid gap-2">
              <div className="text-sm font-semibold">About Us</div>
              {[
                "We don’t just manage feeds—we craft obsessions.",
                "Full-stack support under one roof: websites, content, strategy, ads, SEO, and personal branding.",
                "Transparent, fast, and growth-minded partnerships focused on outcomes you can measure."
              ].map((line, i) => (
                <motion.p
                  key={i}
                  className="text-sm text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ amount: 0.2 }}
                >
                  {line}
                </motion.p>
              ))}
              <motion.ul
                className="mt-3 grid gap-1 text-sm text-muted-foreground"
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                }}
                viewport={{ amount: 0.2 }}
              >
                {[
                  "Digital & Content Marketing",
                  "Social Media Management & Ad Campaigns",
                  "Website Design & SEO + Local Listings",
                  "Brand Story & Identity • Personal Brand Development"
                ].map((service, i) => (
                  <motion.li
                    key={i}
                    variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                  >
                    • {service}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </motion.section>

      

      <SiteFooter />

      <EnquiryDialog open={enquiryOpen} onOpenChange={setEnquiryOpen} selectedPlan={selectedPlan} />
      <FloatingCTA onClick={() => openEnquiry()} />
    </div>
  );
}
