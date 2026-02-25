import type { PageBuilderSectionType } from "~/types";

type FAQSectionProps = Extract<PageBuilderSectionType, { _type: "faqSection" }>;

export const FAQSection = (props: FAQSectionProps) => {
  const { title } = props;

  return <section className="py-5">{title && <h2>{title}</h2>}</section>;
};
