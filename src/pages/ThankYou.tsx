import { Link } from "react-router-dom";
import { CheckCircle, Phone, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const ThankYou = () => {
  return (
    <>
      <SEOHead
        title="Thank You | The Desai Firm"
        description="Your consultation request has been received. The Desai Firm will contact you shortly."
      />

      <section className="min-h-screen flex items-center justify-center bg-cream section-padding">
        <div className="container-legal max-w-2xl text-center">
          <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-accent" />
          </div>

          <h1 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Thank You for Reaching Out
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Your consultation request has been received. We typically respond within one business day. If your matter is time-sensitive, please call our office directly.
          </p>

          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <h2 className="font-heading text-lg font-semibold text-card-foreground mb-4">What Happens Next</h2>
            <ul className="space-y-3 text-left">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 text-sm font-bold text-accent">1</span>
                <span className="text-foreground/80">We'll review your submission and assess whether we can assist with your matter.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 text-sm font-bold text-accent">2</span>
                <span className="text-foreground/80">A member of our team will contact you by phone or email to schedule a consultation.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 text-sm font-bold text-accent">3</span>
                <span className="text-foreground/80">During the consultation, we'll discuss the facts of your case, your options, and recommended next steps.</span>
              </li>
            </ul>
          </div>

          <a href="tel:9045636952">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-gold-light font-semibold mb-6">
              <Phone className="w-4 h-4 mr-2" />
              Call (904) 563-6952
            </Button>
          </a>

          <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4 text-left">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
              <p className="text-xs text-foreground/70 leading-relaxed">
                <strong>Emergency Notice:</strong> If you are in immediate danger, call 911. If you have an urgent legal deadline (such as a court hearing or filing deadline), please call our office immediately at (904) 563-6952. Email and web form communications may not be reviewed outside of business hours.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Link to="/" className="text-accent font-medium hover:underline">
              ← Return to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
