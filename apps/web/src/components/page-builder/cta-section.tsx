import type { PageBuilderSectionType } from "~/types";

type CTASectionProps = Extract<PageBuilderSectionType, { _type: "ctaSection" }>;

export const CTASection = (props: CTASectionProps) => {
  const { title, content } = props;

  return (
    <section className="py-5">
      {title && <h2>{title}</h2>}

      {content && content}
    </section>
  );
};
