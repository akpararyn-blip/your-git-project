import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pulse — Performance-маркетинг, который окупается" },
      {
        name: "description",
        content:
          "Pulse — performance-агентство полного цикла: контекстная и таргетированная реклама, SEO, аналитика. Прозрачные KPI и измеримый рост выручки.",
      },
      { property: "og:title", content: "Pulse — Performance-маркетинг, который окупается" },
      {
        property: "og:description",
        content:
          "Превращаем рекламные бюджеты в предсказуемую выручку. Аналитика, медиабаинг, креатив.",
      },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "×4.2", label: "Средний рост ROAS" },
  { value: "—38%", label: "Стоимость лида" },
  { value: "120+", label: "Запущенных кампаний" },
  { value: "94%", label: "Клиентов с нами 2+ года" },
];

const logos = ["Northwave", "Lumen", "Acme Co.", "Verra", "Forma", "Helio", "Mercato", "Solid"];

const principles = [
  {
    no: "01",
    title: "Данные, а не догадки",
    body:
      "Каждое решение опирается на сквозную аналитику. Дашборды в реальном времени — у вас и у нас.",
  },
  {
    no: "02",
    title: "Бюджет как инвестиция",
    body:
      "Считаем юнит-экономику до запуска. Если канал не окупится — честно скажем и не возьмём в работу.",
  },
  {
    no: "03",
    title: "Команда, а не подрядчик",
    body:
      "Стратег, медиабайер, аналитик и дизайнер закреплены за вашим проектом. Без перекидывания задач.",
  },
];
