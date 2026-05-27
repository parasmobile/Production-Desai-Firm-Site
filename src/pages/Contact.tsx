import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";

const countyOptions = [
  "St. Johns County",
  "Flagler County",
  "Duval County",
  "Clay County",
  "Putnam County",
  "Volusia County",
  "Other Florida County",
];

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [disclaimerChecked, setDisclaimerChecked] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    county: "",
    brief_message: "",
    honeypot: "", // spam prevention
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) return; // bot detected

    if (!disclaimerChecked) {
      toast({ title: "Please acknowledge the disclaimer", variant: "destructive" });
      return;
    }

    if (!formData.first_name || !formData.last_name || !formData.email || !formData.phone) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload: Record<string, string> = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        phone: formData.phone,
        email: formData.email,
        county: formData.county,
        brief_message: formData.brief_message,
        source: "desaifirm.com - Request a Free Consultation",
        submitted_at: new Date().toISOString(),
      };

      const params = new URLSearchParams(payload);

      await fetch(
        `https://flow.zoho.com/784331050/flow/webhook/incoming?zapikey=1001.abee62316490c0512da8aba1b4a0c10b.9f725018e3f0f2dd21795d84d81c6137&isdebug=false&${params.toString()}`,
        {
          method: "POST",
          mode: "no-cors",
          body: params,
        }
      );
      navigate("/thank-you");
    } catch {
      toast({ title: "Something went wrong. Please call us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Contact The Desai Firm | Saint Augustine Attorney"
        description="Contact attorney Paras J. Desai for a consultation. Call (904) 563-6952 or submit our contact form. Offices in Saint Augustine, Florida."
      />

      <PageHero
        title="Contact Us"
        subtitle="Reach out for a consultation. We'll respond promptly to discuss your legal matter."
        breadcrumb="Contact"
      />

      <section className="section-padding bg-background">
        <div className="container-legal">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
                <div className="gold-divider mb-6" />
              </div>

              <a href="tel:9045636952" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-accent transition-colors">Phone</p>
                  <p className="text-muted-foreground">(904) 563-6952</p>
                </div>
              </a>

              <a href="mailto:pd@desaifirm.com" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-accent transition-colors">Email</p>
                  <p className="text-muted-foreground">pd@desaifirm.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Office</p>
                  <p className="text-muted-foreground">
                    2200 N. Ponce De Leon Blvd<br />
                    Suite 7<br />
                    Saint Augustine, FL 32084
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Office Hours</p>
                  <p className="text-muted-foreground">Mon – Fri: 9:00 AM – 5:00 PM</p>
                </div>
              </div>

              {/* Embedded Map */}
              <div className="rounded-lg overflow-hidden border border-border h-64">
                <iframe
                  src="https://maps.google.com/maps?q=2200+N+Ponce+De+Leon+Blvd+Suite+7+Saint+Augustine+FL+32084&output=embed&z=15"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Desai Firm office location in Saint Augustine, Florida"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="font-heading text-2xl font-bold text-card-foreground mb-2">Request a Free Consultation</h2>
                <p className="text-muted-foreground text-sm mb-8">
                  Fill out the form below and we'll get back to you as soon as possible. All fields marked with * are required.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot - hidden from users */}
                  <input
                    type="text"
                    name="website"
                    value={formData.honeypot}
                    onChange={(e) => handleChange("honeypot", e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first_name">First Name *</Label>
                      <Input
                        id="first_name"
                        required
                        maxLength={100}
                        value={formData.first_name}
                        onChange={(e) => handleChange("first_name", e.target.value)}
                        placeholder="First name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last_name">Last Name *</Label>
                      <Input
                        id="last_name"
                        required
                        maxLength={100}
                        value={formData.last_name}
                        onChange={(e) => handleChange("last_name", e.target.value)}
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        maxLength={20}
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="(xxx) xxx-xxxx"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        maxLength={255}
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>County</Label>
                    <Select onValueChange={(v) => handleChange("county", v)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select county" />
                      </SelectTrigger>
                      <SelectContent>
                        {countyOptions.map((c) => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Brief Description of Your Matter</Label>
                    <Textarea
                      id="message"
                      maxLength={1000}
                      rows={4}
                      value={formData.brief_message}
                      onChange={(e) => handleChange("brief_message", e.target.value)}
                      placeholder="Please briefly describe your legal matter..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="disclaimer"
                      checked={disclaimerChecked}
                      onCheckedChange={(checked) => setDisclaimerChecked(checked as boolean)}
                    />
                    <Label htmlFor="disclaimer" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                      I understand that submitting this form does not create an attorney-client relationship. Information provided is for the purpose of evaluating potential representation only. I acknowledge that this communication is not privileged until an engagement letter is signed.
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground hover:bg-gold-light font-semibold text-base py-6"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Consultation Request"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Or call us directly at{" "}
                    <a href="tel:9045636952" className="text-accent font-medium">(904) 563-6952</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
