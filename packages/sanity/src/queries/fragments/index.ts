export const imageFragment = /* groq */ `
  "id": asset._ref,
  "preview": asset->metadata.lqip,
  hotspot { x, y },
  crop {
    bottom,
    left,
    right,
    top,
  }
`;

export const linkFragment = /* groq */ `
  _type,
  text,
  ...select(
    type == "internal" => {
      "type": "internal",
      "slug": reference->slug.current,
      "documentType": reference->_type,
    },
    type == "external"  => {
      "type": "external",
      url,
      openInNewTab
    },
  )
`;

export const buttonFragment = /* groq */ `
  _type,
  link {
    ${linkFragment}
  },
  variant
`;
