import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const countyOptions = [
  "St. Johns County",
  "Flagler County",
  "Duval County",
  "Clay County",
  "Putnam County",
  "Volusia County",
  "Other Florida County",
];

const ContactForm = () => {
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
    honeypot: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) return;

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
        { method: "POST", mode: "no-cors", body: params }
      );
      window.location.href = "/thank-you";
    } catch {
      toast({ title: "Something went wrong. Please call us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-8">
      <h2 className="font-heading text-2xl font-bold text-card-foreground mb-2">Request a Free Consultation</h2>
      <p className="text-muted-foreground text-sm mb-8">
        Fill out the form below and we'll get back to you as soon as possible. All fields marked with * are required.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
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
            <Input id="first_name" required maxLength={100} value={formData.first_name} onChange={(e) => handleChange("first_name", e.target.value)} placeholder="First name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last_name">Last Name *</Label>
            <Input id="last_name" required maxLength={100} value={formData.last_name} onChange={(e) => handleChange("last_name", e.target.value)} placeholder="Last name" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone *</Label>
            <Input id="phone" type="tel" required maxLength={20} value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="(xxx) xxx-xxxx" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" required maxLength={255} value={formData.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="your@email.com" />
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
          <Textarea id="message" maxLength={1000} rows={4} value={formData.brief_message} onChange={(e) => handleChange("brief_message", e.target.value)} placeholder="Please briefly describe your legal matter..." />
        </div>

        <div className="flex items-start gap-3">
          <Checkbox id="disclaimer" checked={disclaimerChecked} onCheckedChange={(checked) => setDisclaimerChecked(checked as boolean)} />
          <Label htmlFor="disclaimer" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
            I understand that submitting this form does not create an attorney-client relationship. Information provided is for the purpose of evaluating potential representation only. I acknowledge that this communication is not privileged until an engagement letter is signed.
          </Label>
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full bg-accent text-accent-foreground hover:bg-gold-light font-semibold text-base py-6">
          {isSubmitting ? "Submitting..." : "Submit Consultation Request"}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Or call us directly at{" "}
          <a href="tel:9045636952" className="text-accent font-medium">(904) 563-6952</a>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
