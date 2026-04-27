import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/service-page-layout";
import { getServiceBySlug, SERVICES, type ServiceItem } from "@/lib/services-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug as ServiceItem["slug"]);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const service = loaderData?.service;
    if (!service) {
      return {
        meta: [
          { title: "Услуга не найдена — ARYN TEAM" },
        ],
      };
    }
    return {
      meta: [
        { title: service.meta.title },
        { name: "description", content: service.meta.description },
        { property: "og:title", content: service.meta.title },
        { property: "og:description", content: service.meta.description },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Услуга не найдена
      </p>
      <h1 className="mt-4 font-display text-5xl font-medium tracking-tight">
        Такой услуги пока нет
      </h1>
      <p className="mt-4 text-muted-foreground">
        Возможно, ссылка устарела. Все актуальные услуги — на странице услуг.
      </p>
    </div>
  ),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  return <ServicePageLayout service={service} />;
}

void SERVICES;
