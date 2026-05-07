interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

const PageHero = ({ title, subtitle, breadcrumb }: PageHeroProps) => {
  return (
    <section className="bg-primary py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-navy-dark opacity-90" />
      <div className="container-legal px-4 sm:px-6 lg:px-8 relative z-10">
        {breadcrumb && (
          <p className="text-accent text-sm font-medium mb-3 tracking-wide uppercase">{breadcrumb}</p>
        )}
        <h1 className="font-heading text-3xl lg:text-5xl font-bold text-primary-foreground mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-primary-foreground/70 text-lg lg:text-xl max-w-3xl">
            {subtitle}
          </p>
        )}
        <div className="gold-divider mt-6" />
      </div>
    </section>
  );
};

export default PageHero;
