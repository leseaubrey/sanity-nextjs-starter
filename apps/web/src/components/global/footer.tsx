import type { GLOBAL_DATA_QUERY_RESULT } from "@workspace/sanity/types";

import { SanityLink } from "../shared/sanity-link";
import { SocialMediaLinks } from "../shared/social-media-links";
import { SubFooterNavigation } from "./sub-footer-navigation";

interface FooterProps {
  footer: GLOBAL_DATA_QUERY_RESULT["footer"];
  settings: GLOBAL_DATA_QUERY_RESULT["settings"];
}

export const Footer = (props: FooterProps) => {
  const { footer, settings } = props;

  if (!footer) {
    return null;
  }

  const { strapline, columns, copyrightText, subFooterNavigation } = footer;

  const { socialMediaLinks } = settings ?? {};

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            {strapline && <span>{strapline}</span>}

            {socialMediaLinks && socialMediaLinks.length > 0 && (
              <div className="mt-6">
                <SocialMediaLinks links={socialMediaLinks} />
              </div>
            )}
          </div>

          {columns && columns.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2">
              {columns.map((column) => (
                <div key={column._key}>
                  {column.title && (
                    <h2 className="mb-2 text-lg">{column.title}</h2>
                  )}

                  <ul className="mt-2 space-y-2">
                    {(column.links ?? []).map((link) => (
                      <li key={link._key}>
                        <SanityLink {...link} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 pt-8">
          {copyrightText && (
            <div>
              <span className="text-sm">&copy; {copyrightText}</span>
            </div>
          )}

          <SubFooterNavigation
            items={subFooterNavigation?.items ?? []}
            className="text-sm"
          />
        </div>
      </div>
    </footer>
  );
};
