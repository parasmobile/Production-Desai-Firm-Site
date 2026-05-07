import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | The Desai Firm"
        description="Privacy policy for The Desai Law Firm LLC website. Learn how we collect, use, and protect your information."
      />

      <PageHero title="Privacy Policy" breadcrumb="Privacy Policy" />

      <section className="section-padding bg-background">
        <div className="container-legal max-w-3xl prose text-foreground/80 space-y-6">
          <p><strong>Effective Date:</strong> {new Date().getFullYear()}</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Information We Collect</h2>
          <p>When you use our website, we may collect information you provide directly to us, such as your name, email address, phone number, and details about your legal matter when you submit our contact form. We may also collect usage data through analytics tools, including pages visited, time on site, and referring URLs.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">How We Use Your Information</h2>
          <p>We use the information we collect to respond to your inquiries, evaluate potential representation, improve our website and services, and comply with legal obligations. We do not sell your personal information to third parties.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Data Security</h2>
          <p>We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of electronic transmission or storage is 100% secure.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Cookies and Analytics</h2>
          <p>Our website may use cookies and analytics tools to understand how visitors interact with our site. You can control cookie settings through your browser preferences.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Third-Party Links</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Contact Us</h2>
          <p>If you have questions about this privacy policy, contact us at pd@desaifirm.com or (904) 563-6952.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated effective date.</p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
