export const imageFragment = /* groq */ `
  image {
    "id": asset._ref,
    "preview": asset->metadata.lqip,
    hotspot { x, y },
    crop {
      bottom,
      left,
      right,
      top,
    }
  }
`;
