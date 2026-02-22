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
  label,
  ...select(
    link.type == "internal" => {
      "type": "internal",
      "slug": link.reference->slug.current,
      "documentType": link.reference->_type,
    },
    link.type == "external" => {
      "type": "external",
      "url": link.url,
      "openInNewTab": link.openInNewTab
    },
  )
`;
