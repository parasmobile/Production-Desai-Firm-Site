import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

const CTASection = ({
  title = "Ready to Discuss Your Case?",
  subtitle = "Contact The Desai Firm today for a practical assessment of your legal matter."
}: CTASectionProps) => {
  return (
    <section className="bg-primary section-padding">
      <div className="container-legal text-center">
        <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
          {title}
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-gold-light font-semibold px-8 text-base">
              Request a Consultation
            </Button>
          </Link>
          <a href="tel:9045636952">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 text-base">
              <Phone className="w-4 h-4 mr-2" />
              (904) 563-6952
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
