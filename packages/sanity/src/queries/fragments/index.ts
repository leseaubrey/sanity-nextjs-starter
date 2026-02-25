export const imageFragment = /* groq */ `
  "id": asset._ref,
  "preview": asset->metadata.lqip,
  hotspot { x, y },
  crop {
    bottom,
    left,
    right,
    top
  }
`;

export const linkFragment = /* groq */ `
  _type,
  text,
  ...select(
    type == "internal" => {
      "type": "internal",
      "slug": reference->slug.current,
      "documentType": reference->_type
    },
    type == "external"  => {
      "type": "external",
      url,
      openInNewTab
    }
  )
`;

export const buttonFragment = /* groq */ `
  _type,
  link {
    ${linkFragment}
  },
  variant
`;

/**
 * Navigation
 */

const navigationLinkFragment = /* groq */ `
  _type == 'navigationLink' => {
    _key,
    _type,
    link { 
      ${linkFragment}
    }
  }
`;

const navigationGroupFragment = /* groq */ `
  _type == 'navigationGroup' => {
    _key,
    _type,
    title,
    items[] {
      ${navigationLinkFragment}
    }
  }
`;

export const oneLevelNavigationFragment = /* groq */ `
  items[] {
    ${navigationLinkFragment}
  },
`;

export const twoLevelNavigationFragment = /* groq */ `
  items[] {
    ${navigationLinkFragment},
    ${navigationGroupFragment}
  },
`;

/**
 * Page Builder
 */

const ctaFragment = /* groq */ `
  _type == "cta" => {
    _type,
    _key,
    title,
    content
  }
`;

const faqFragment = /* groq */ `
  _type == "faq" => {
    _type,
    _key,
    title
  }
`;

export const pageBuilderFragment = /* groq */ `
  pageBuilder[] {
    ${ctaFragment},
    ${faqFragment}
  }
`;
