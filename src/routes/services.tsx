import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactDialog } from "@/components/contact-dialog";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Услуги — ARYN TEAM · Видеопродакшен и реклама" },
      {
        name: "description",
        content:
          "Видеопродакшен (рекламные ролики, имиджевые видео, съёмка мероприятий) и performance-маркетинг: контекст, таргет, аналитика. Цены в тенге.",
      },
      {
        property: "og:title",
        content: "Услуги — ARYN TEAM · Видеопродакшен и реклама",
      },
      {
        property: "og:description",
        content:
          "Рекламные и имиджевые видеоролики от 30 000 тг. Performance-маркетинг от 150 000 тг/мес.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const services = [
    {
      no: "01",
      title: "Контекстная реклама",
      summary: "Google Ads и Yandex Direct. Поиск, КМС, ремаркетинг.",
      points: ["Семантическое ядро", "A/B креативов", "Управление ставками", "Минус-фразы и чистка"],
    },
    {
      no: "02",
      title: "Таргетированная реклама",
      summary: "Instagram, TikTok, VK Ads — точное попадание в ЦА.",
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
      points: ["GA4, Yandex Metrica", "Server-side трекинг", "Дашборды Looker Studio", "Когортный анализ"],
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

  const videos = [
    {
      no: "V1",
      title: "Вертикальные рекламные ролики",
      desc: "Для Instagram Reels/Stories, TikTok, YouTube Shorts. Короткие, динамичные видео. Доп. формат 1:1.",
      meta: "9:16 · 10–60 сек",
      price: "30 000 тг",
      unit: "за ролик",
    },
    {
      no: "V2",
      title: "Горизонтальные рекламные ролики",
      desc: "Для YouTube, сайтов, презентаций. Полное раскрытие идеи бренда и продукта.",
      meta: "16:9 · 15–180 сек",
      price: "30 000 тг",
      unit: "за ролик",
    },
    {
      no: "V3",
      title: "Имиджевые (корпоративные)",
      desc: "Для презентаций и выставок. Фокус на бренде, ценностях и команде.",
      meta: "16:9 · 30–180 сек",
      price: "50 000 тг",
      unit: "за ролик",
    },
    {
      no: "V4",
      title: "Тренинги и обучающие",
      desc: "Для обучения сотрудников или сервисной поддержки клиентов.",
      meta: "16:9 · 30–180 сек",
      price: "50 000 тг",
      unit: "за ролик",
    },
    {
      no: "V5",
      title: "Съёмка на мероприятии",
      desc: "Офлайн-съёмка видеоотчётов. Также услуги фотографа на площадке.",
      meta: "16:9 · видеоотчёт",
      price: "50 000 тг",
      unit: "за час",
    },
  ];

  const tiers = [
    {
      name: "Старт",
      price: "от 150 000 тг",
      period: "в месяц",
      desc: "Для бизнеса, который только запускает performance-каналы.",
      features: ["1—2 рекламных канала", "Базовая аналитика", "Еженедельный отчёт", "Менеджер проекта"],
      accent: false,
    },
    {
      name: "Рост",
      price: "от 300 000 тг",
      period: "в месяц",
      desc: "Полноценная команда performance-маркетинга на вашей стороне.",
      features: ["До 5 каналов", "Сквозная аналитика", "Креативы и посадочные", "Стратег + аналитик + байер"],
      accent: true,
    },
    {
      name: "Скейл",
      price: "по запросу",
      period: "",
      desc: "Для крупных рекламодателей с бюджетом от 5 млн тг в месяц.",
      features: ["Выделенная команда", "Server-side трекинг", "ML-оптимизация ставок", "SLA и приоритет"],
      accent: false,
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-10 lg:pt-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            / Услуги
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1] tracking-tight text-balance md:text-7xl lg:text-8xl">
            Performance-маркетинг. <em className="not-italic">Один</em> измеримый результат.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Основное направление — комплексный маркетинг под выручку. Видеопродакшен и аудит
            рекламы — в дополнение, когда они усиливают результат.
          </p>
        </div>
      </section>

      {/* SERVICES GRID — основная услуга */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                / Основная услуга — Маркетинг
              </p>
              <h2 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
                Шесть направлений performance-маркетинга.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Берём задачу под ключ: от стратегии и креативов до сквозной аналитики и
              оптимизации по выручке.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
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

      {/* ADDITIONAL SERVICES — заголовок */}
      <section className="border-b border-hairline bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            / Дополнительно
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Дополнительные услуги
          </h2>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            Подключаем точечно — отдельно или к маркетинговому контракту.
          </p>
        </div>
      </section>

      {/* AUDIT — доп. услуга */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-10 rounded-3xl border border-hairline bg-background p-8 md:grid-cols-[1.2fr_1fr] md:p-12">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                / Доп. услуга · A1
              </p>
              <h3 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
                Аудит рекламы за 30 минут
              </h3>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Разберём ваши текущие рекламные кабинеты, аналитику и креативы. Покажем точки
                роста и быстрые победы — без обязательств.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {[
                  "Структура кампаний и ставок",
                  "Аналитика и атрибуция",
                  "Креативы и посадочные",
                  "План действий на 30 дней",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2 text-foreground/80">
                    <span aria-hidden className="mt-2 h-px w-3 bg-foreground/40" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-between gap-8 rounded-2xl bg-secondary/60 p-8">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Стоимость
                </p>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-medium tracking-tight">
                    Бесплатно
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Онлайн-встреча 30 минут с маркетологом и аналитиком.
                </p>
              </div>
              <ContactDialog
                title="Аудит рекламы"
                description="Оставьте контакты — свяжемся и согласуем удобное время."
                trigger={
                  <button
                    type="button"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:gap-3"
                  >
                    Запросить аудит
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO PRODUCTION — доп. услуга */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                / Доп. услуга — Видеопродакшен
              </p>
              <h2 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
                Снимаем то, что хочется <em className="not-italic">досмотреть</em>.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Сценарий, съёмка, монтаж и цветокоррекция — под ключ. Цены указаны за готовый ролик
              без скрытых доплат.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <article
                key={v.no}
                className="group relative flex flex-col bg-background p-8 transition-colors hover:bg-secondary md:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">{v.no}</span>
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    {v.meta}
                  </span>
                </div>
                <h3 className="mt-10 font-display text-2xl font-medium leading-tight tracking-tight">
                  {v.title}
                </h3>
                <p className="mt-3 text-muted-foreground">{v.desc}</p>
                <div className="mt-auto pt-8">
                  <div className="flex items-baseline gap-2 border-t border-hairline pt-5">
                    <span className="font-display text-3xl font-medium tracking-tight">
                      {v.price}
                    </span>
                    <span className="text-sm text-muted-foreground">/ {v.unit}</span>
                  </div>
                </div>
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
                / Тарифы
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
            <ContactDialog
              title="Расскажите о проекте"
              description="Оставьте контакты — обсудим задачу и подберём формат."
              trigger={
                <button
                  type="button"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:gap-3"
                >
                  Расскажите о проекте
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
