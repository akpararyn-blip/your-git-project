import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Услуги — Pulse Performance Marketing" },
      {
        name: "description",
        content:
          "Контекстная и таргетированная реклама, SEO, веб-аналитика, креативы и посадочные страницы. Полный цикл performance-маркетинга.",
      },
      { property: "og:title", content: "Услуги — Pulse Performance Marketing" },
      {
        property: "og:description",
        content:
          "Performance-маркетинг полного цикла: реклама, аналитика, креатив и посадочные.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    no: "01",
    title: "Контекстная реклама",
    summary: "Yandex Direct, Google Ads. Поисковые, РСЯ, ремаркетинг.",
    points: ["Семантическое ядро", "A/B креативов", "Управление ставками", "Минус-фразы и чистка"],
  },
  {
    no: "02",
    title: "Таргетированная реклама",
    summary: "VK Ads, Telegram Ads, MyTarget — точное попадание в ЦА.",
    points: ["Сегментация аудиторий", "Look-alike модели", "Видео и статика", "Ретаргетинг"],
  },
  {
    no: "03",
    title: "SEO и контент",
    summary: "Технический аудит, контент-план, ссылочное и рост органики.",
    points: ["Техаудит и Core Web Vitals", "Контент-стратегия", "Линкбилдинг", "E-E-A-T оптимизация"],
  },
  {
    no: "04",
    title: "Сквозная аналитика",
    summary: "Настройка трекинга, дашборды и атрибуция по всей воронке.",
    points: ["GA4, Yandex Metrica", "Server-side трекинг", "Roistat / собственные дашборды", "Когортный анализ"],
  },
  {
    no: "05",
    title: "Креативы и посадочные",
    summary: "Баннеры, видео, лендинги, оптимизированные под конверсию.",
    points: ["UX-исследование", "Дизайн и копирайтинг", "A/B-тесты", "Скорость и SEO"],
  },
  {
    no: "06",
    title: "Email и CRM-маркетинг",
    summary: "Удержание и допродажи через автоматизацию коммуникаций.",
    points: ["Welcome-цепочки", "Сегментация базы", "Триггерные сценарии", "Реактивация"],
  },
];

const tiers = [
  {
    name: "Старт",
    price: "от 120 000 ₽",
    period: "в месяц",
    desc: "Для бизнеса, который только запускает performance-каналы.",
    features: ["1—2 рекламных канала", "Базовая аналитика", "Еженедельный отчёт", "Менеджер проекта"],
    accent: false,
  },
  {
    name: "Рост",
    price: "от 280 000 ₽",
    period: "в месяц",
    desc: "Полноценная команда performance-маркетинга на вашей стороне.",
    features: ["До 5 каналов", "Сквозная аналитика", "Креативы и посадочные", "Стратег + аналитик + байер"],
    accent: true,
  },
  {
    name: "Скейл",
    price: "по запросу",
    period: "",
    desc: "Для крупных рекламодателей с бюджетом от 3 млн ₽ в месяц.",
    features: ["Выделенная команда", "Server-side трекинг", "ML-оптимизация ставок", "SLA и приоритет"],
    accent: false,
  },
];

function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-10 lg:pt-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            / Услуги
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1] tracking-tight text-balance md:text-7xl lg:text-8xl">
            Шесть направлений. <em className="not-italic">Один</em> измеримый результат.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Мы не продаём «услуги ради услуг». Подбираем только те каналы и инструменты, которые
            окупятся в рамках вашей юнит-экономики.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.no}
                className="group relative flex flex-col bg-background p-8 transition-colors hover:bg-secondary md:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">{s.no}</span>
                  <span className="h-2 w-2 rounded-full bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="mt-12 font-display text-3xl font-medium leading-tight tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-muted-foreground">{s.summary}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-foreground/80">
                      <span aria-hidden className="mt-2 h-px w-3 bg-foreground/40" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                / Форматы сотрудничества
              </p>
              <h2 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
                Прозрачно, как и должно быть.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Никаких скрытых комиссий с рекламных бюджетов. Только фиксированный гонорар за
              работу команды.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={
                  "relative flex flex-col rounded-2xl border p-8 md:p-10 " +
                  (t.accent
                    ? "border-foreground bg-foreground text-background"
                    : "border-hairline bg-background")
                }
              >
                {t.accent && (
                  <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                    Чаще выбирают
                  </span>
                )}
                <h3 className="font-display text-3xl font-medium tracking-tight">{t.name}</h3>
                <p
                  className={
                    "mt-3 text-sm " + (t.accent ? "text-background/70" : "text-muted-foreground")
                  }
                >
                  {t.desc}
                </p>
                <div className="mt-8 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-medium tracking-tight">
                    {t.price}
                  </span>
                  {t.period && (
                    <span className={t.accent ? "text-background/60" : "text-muted-foreground"}>
                      {t.period}
                    </span>
                  )}
                </div>
                <ul
                  className={
                    "mt-8 space-y-3 text-sm " + (t.accent ? "text-background/90" : "text-foreground/80")
                  }
                >
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className={
                          "mt-2 h-px w-3 " + (t.accent ? "bg-accent" : "bg-foreground/40")
                        }
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={
                    "mt-10 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all hover:gap-3 " +
                    (t.accent
                      ? "bg-accent text-accent-foreground"
                      : "border border-foreground/20 text-foreground hover:bg-foreground/5")
                  }
                >
                  Обсудить <span aria-hidden>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              Не уверены, какой формат подойдёт?
            </h2>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:gap-3"
            >
              Расскажите о проекте
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
