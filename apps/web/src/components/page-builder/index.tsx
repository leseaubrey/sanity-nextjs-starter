import type { PageBuilderSectionType, PageBuilderType } from "~/types";
import { CTASection } from "./cta-section";
import { FAQSection } from "./faq-section";

interface PageBuilderProps {
  pageBuilder: PageBuilderType;
}

function UnknownSection(_x: never) {
  return <div>Unknown section </div>;
}

function renderBlock(section: PageBuilderSectionType) {
  switch (section._type) {
    case "ctaSection":
      return <CTASection key={section._key} {...section} />;
    case "faqSection":
      return <FAQSection key={section._key} {...section} />;
    default:
      return UnknownSection(section);
  }
}

export const PageBuilder = (props: PageBuilderProps) => {
  const { pageBuilder } = props;

  if (pageBuilder.length === 0) {
    return null;
  }

  return <div>{pageBuilder.map(renderBlock)}</div>;
};
