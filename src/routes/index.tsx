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

function HomePage() {
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

  const process = [
    { step: "01", title: "Аудит", desc: "Разбираем текущие кампании, аналитику и юнит-экономику." },
    { step: "02", title: "Стратегия", desc: "Карта каналов, прогноз ROAS, медиаплан на 3 месяца." },
    { step: "03", title: "Запуск", desc: "Креативы, посадочные, настройка трекинга и атрибуции." },
    { step: "04", title: "Рост", desc: "Еженедельные итерации. Масштабируем то, что работает." },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-10 lg:pt-28">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <span className="h-px w-8 bg-foreground/40" />
            Performance Marketing Studio · 2018—2025
          </div>

          <h1 className="mt-8 max-w-5xl font-display text-5xl font-medium leading-[0.95] tracking-tight text-balance md:text-7xl lg:text-[7.5rem]">
            Реклама, которую можно <em className="not-italic">измерить</em> до копейки.
          </h1>

          <div className="mt-10 grid items-end gap-10 md:grid-cols-[1.2fr_1fr]">
            <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
              Pulse — performance-агентство, которое относится к вашему рекламному бюджету как
              к собственному. Стратегия, медиабаинг, аналитика и креатив — в одной команде.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:gap-3"
              >
                Получить аудит бесплатно
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 bg-transparent px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
              >
                Смотреть услуги
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-background p-6 md:p-8">
                <div className="font-display text-4xl font-medium tracking-tight md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative big mark */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 hidden font-display text-[28rem] font-medium leading-none text-accent/30 lg:block"
        >
          P.
        </div>
      </section>

      {/* LOGOS MARQUEE */}
      <section className="border-b border-hairline py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-center text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Нам доверяют рост
          </p>
        </div>
        <div className="mt-6 overflow-hidden">
          <div className="marquee flex w-max items-center gap-16 whitespace-nowrap pr-16">
            {[...logos, ...logos].map((logo, i) => (
              <span
                key={`${logo}-${i}`}
                className="font-display text-3xl font-medium tracking-tight text-foreground/30 transition-colors hover:text-foreground"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-16 md:grid-cols-[1fr_2fr] md:gap-24">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                / Принципы
              </p>
              <h2 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
                Не <em className="not-italic">тратим</em>. Инвестируем.
              </h2>
            </div>

            <ul className="space-y-px overflow-hidden rounded-2xl bg-hairline">
              {principles.map((p) => (
                <li key={p.no} className="bg-background p-8 md:p-10">
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-sm text-muted-foreground">{p.no}</span>
                    <div>
                      <h3 className="font-display text-2xl font-medium tracking-tight">
                        {p.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-muted-foreground">{p.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            / Как мы работаем
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Четыре шага от первого касания до устойчивого роста.
          </h2>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="group relative bg-background p-8 transition-colors hover:bg-accent/30">
                <div className="font-mono text-xs text-muted-foreground">{p.step}</div>
                <h3 className="mt-12 font-display text-2xl font-medium tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:py-32">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            / Отзыв
          </p>
          <blockquote className="mt-8 font-display text-3xl font-medium leading-snug tracking-tight text-balance md:text-5xl">
            «За полгода с Pulse мы снизили CAC на 41% и вышли на стабильный
            <span className="bg-accent px-2"> ×3 ROAS </span>
            в основных каналах. Прозрачно, по делу, без воды.»
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-12 w-12 rounded-full bg-foreground/10" />
            <div className="text-left">
              <div className="font-medium">Анна Воронцова</div>
              <div className="text-sm text-muted-foreground">CMO, Northwave</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="relative overflow-hidden rounded-3xl bg-foreground p-10 text-background md:p-16 lg:p-20">
            <div className="relative z-10 grid items-center gap-10 md:grid-cols-[2fr_1fr]">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-background/60">
                  Бесплатный аудит
                </p>
                <h2 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight md:text-6xl">
                  Покажем, где утекает <em className="not-italic text-accent">бюджет</em>.
                </h2>
                <p className="mt-6 max-w-xl text-background/70">
                  За 30 минут разберём ваши кампании и подсветим точки роста. Без обязательств,
                  без шаблонных презентаций.
                </p>
              </div>
              <div className="md:justify-self-end">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-medium text-accent-foreground transition-all hover:gap-3"
                >
                  Запросить аудит
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -right-10 font-display text-[20rem] font-medium leading-none text-background/5"
            >
              ↗
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
