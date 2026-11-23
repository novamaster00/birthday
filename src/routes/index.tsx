import { createFileRoute } from "@tanstack/react-router";

import { Scrapbook } from "@/components/scrapbook";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A Little Book of Us — Birthday Scrapbook" },
      {
        name: "description",
        content:
          "A handmade birthday scrapbook of letters, anniversary photographs, and twenty years of little moments.",
      },
      { property: "og:title", content: "A Little Book of Us — Birthday Scrapbook" },
      {
        property: "og:description",
        content:
          "A handmade birthday scrapbook of letters, anniversary photographs, and twenty years of little moments.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Scrapbook,
});
