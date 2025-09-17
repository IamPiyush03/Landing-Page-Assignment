import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  onChoose: () => void;
  highlighted?: boolean;
  icon?: LucideIcon;
}

export default function PricingCard({ title, price, features, onChoose, highlighted, icon: Icon }: PricingCardProps) {
  return (
    <Card className={`group relative h-full transform border-border/60 bg-secondary transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-1 hover:ring-primary/50 ${highlighted ? "ring-2 ring-primary/70" : ""}`}>
      <CardHeader>
        {Icon && <Icon className="h-8 w-8 text-primary mb-2" />}
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="mt-2 text-3xl font-extrabold">{price}<span className="ml-1 text-sm font-medium text-muted-foreground">/month</span></div>
      </CardHeader>
      <CardContent>
        <ul className="mb-6 mt-2 space-y-2 text-sm text-muted-foreground">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />{f}</li>
          ))}
        </ul>
        <Button className="w-full font-semibold" onClick={onChoose}>Choose Plan</Button>
      </CardContent>
    </Card>
  );
}
