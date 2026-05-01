import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/service-page-layout";
import { getServiceBySlug } from "@/lib/services-data";

const SLUG = "smm" as const;
const service = getServiceBySlug(SLUG)!;

export const Route = createFileRoute("/services/smm")({
  head: () => ({
    meta: [
      { title: service.meta.title },
      { name: "description", content: service.meta.description },
      { property: "og:title", content: service.meta.title },
      { property: "og:description", content: service.meta.description },
    ],
  }),
  component: () => <ServicePageLayout service={service} />,
});
