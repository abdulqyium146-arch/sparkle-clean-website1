interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  light?: boolean;
  headingLevel?: "h2" | "h3";
}

const SectionHeader = ({
  title,
  subtitle,
  badge,
  centered = true,
  light = false,
  headingLevel = "h2",
}: SectionHeaderProps) => {
  const HeadingTag = headingLevel;

  return (
    <header
      className={`max-w-3xl ${
        centered ? "mx-auto text-center" : ""
      } mb-10 lg:mb-14`}
      aria-labelledby="section-title"
    >
      {badge && (
        <span
          role="note"
          className={`inline-block text-sm font-medium px-4 py-1.5 rounded-full mb-4 ${
            light
              ? "bg-primary-foreground/20 text-primary-foreground"
              : "bg-primary/10 text-primary"
          }`}
        >
          {badge}
        </span>
      )}

      <HeadingTag
        id="section-title"
        className={`text-3xl lg:text-4xl font-heading font-bold mb-4 ${
          light ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {title}
      </HeadingTag>

      {subtitle && (
        <p
          className={`text-lg ${
            light
              ? "text-primary-foreground/80"
              : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default SectionHeader;
