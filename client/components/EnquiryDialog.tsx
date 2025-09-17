import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  selectedPlan?: string | null;
}

export default function EnquiryDialog({ open, onOpenChange, selectedPlan }: Props) {
  const [step, setStep] = useState<"form" | "next">("form");
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("next");
  };

  const reset = () => {
    setForm({ name: "", phone: "", email: "" });
    setStep("form");
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) reset(); onOpenChange(v); }}>
      <DialogContent className="bg-secondary/40 backdrop-blur supports-[backdrop-filter]:bg-secondary/40">
        {step === "form" ? (
          <div>
            <DialogHeader>
              <DialogTitle>Book a Consultation</DialogTitle>
              <DialogDescription>Fill your details and we'll reach out within 24 hours.{selectedPlan ? ` Selected: ${selectedPlan}` : ""}</DialogDescription>
            </DialogHeader>
            <form onSubmit={onSubmit} className="mt-4 space-y-3">
              <Input required placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <Input required placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              <Input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <div className="flex items-center gap-2 pt-2">
                <Button type="submit" className="flex-1">Submit</Button>
                <Button type="button" variant="secondary" className="flex-1" onClick={() => onOpenChange(false)}>Cancel</Button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <DialogHeader>
              <DialogTitle>Next Step</DialogTitle>
              <DialogDescription>Choose how you'd like to connect with us.</DialogDescription>
            </DialogHeader>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="flex items-center justify-center rounded-md bg-primary px-4 py-3 font-semibold text-primary-foreground hover:bg-primary/90">WhatsApp Now</a>
              <a href="#" className="flex items-center justify-center rounded-md border border-border bg-background px-4 py-3 font-semibold hover:bg-secondary">Schedule a Meeting</a>
            </div>
            <div className="mt-4 text-center text-xs text-muted-foreground">We'll also email you a confirmation.</div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
