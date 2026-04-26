import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { formatKzPhone, isValidKzPhone } from "@/lib/phone-mask";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Контакты — ARYN TEAM · Алматы" },
      {
        name: "description",
        content:
          "Свяжитесь с ARYN TEAM: бесплатный аудит рекламы за 30 минут. Алматы, +7 707 484 2108, Telegram @arynbg.",
      },
      { property: "og:title", content: "Контакты — ARYN TEAM · Алматы" },
      {
        property: "og:description",
        content: "Запросите бесплатный аудит ваших рекламных кампаний.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const channels = [
    { label: "Телефон", value: "+7 707 484 2108", href: "tel:+77074842108" },
    { label: "Telegram", value: "@arynbg", href: "https://t.me/arynbg" },
  ];

  const budgets = [
    "до 500 000 тг",
    "500 000 — 2 млн тг",
    "2—5 млн тг",
    "более 5 млн тг",
  ];

  const [submitted, setSubmitted] = useState(false);
  const [budget, setBudget] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7 (");
  const [phoneError, setPhoneError] = useState<string | null>(null);

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPhone(formatKzPhone(e.target.value));
    if (phoneError) setPhoneError(null);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValidKzPhone(phone)) {
      setPhoneError("Введите казахстанский номер: +7 (___) ___-__-__");
      return;
    }
    setSubmitted(true);
  }

  return (
    <>
      {/* HERO */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-10 lg:pt-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            / Контакты
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-5xl font-medium leading-[1] tracking-tight text-balance md:text-7xl lg:text-8xl">
            Давайте посчитаем, сколько вы <em className="not-italic">недополучаете</em>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Оставьте заявку — за 24 часа вернёмся с предварительным аудитом и кратким планом
            следующих шагов. Никакого спама, никаких автозвонков.
          </p>
        </div>
      </section>

      {/* FORM + CHANNELS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="rounded-2xl border border-hairline bg-secondary p-10 md:p-14">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <span className="text-xl">✓</span>
                  </div>
                  <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
                    Заявка отправлена.
                  </h2>
                  <p className="mt-4 max-w-md text-muted-foreground">
                    Свяжемся в течение 24 часов в будний день. Если срочно — напишите нам в
                    Telegram, отвечаем быстрее.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setBudget(null);
                      setName("");
                      setPhone("+7 (");
                    }}
                    className="mt-8 text-sm font-medium underline-offset-4 hover:underline"
                  >
                    Отправить ещё одну заявку
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-3 block text-xs font-mono uppercase tracking-widest text-muted-foreground"
                      >
                        Имя <span className="text-foreground">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Введите ваше имя"
                        className="w-full rounded-xl border border-hairline bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="mb-3 block text-xs font-mono uppercase tracking-widest text-muted-foreground"
                      >
                        Компания
                      </label>
                      <input
                        id="company"
                        name="company"
                        placeholder="ACME Inc."
                        className="w-full rounded-xl border border-hairline bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-3 block text-xs font-mono uppercase tracking-widest text-muted-foreground"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        className="w-full rounded-xl border border-hairline bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-xs font-mono uppercase tracking-widest text-muted-foreground"
                      >
                        Телефон <span className="text-foreground">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        inputMode="tel"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="+7 777 000 0000"
                        className="w-full rounded-xl border border-hairline bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
                      />
                      {phoneError && (
                        <p className="mt-2 text-xs text-destructive">{phoneError}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="mb-3 block text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      Рекламный бюджет в месяц
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setBudget(b)}
                          className={
                            "rounded-full border px-4 py-2 text-sm transition-all " +
                            (budget === b
                              ? "border-foreground bg-foreground text-background"
                              : "border-hairline bg-background text-foreground hover:border-foreground/40")
                          }
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-3 block text-xs font-mono uppercase tracking-widest text-muted-foreground"
                    >
                      Расскажите о проекте
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Какие каналы используете, цели на ближайший квартал, текущие сложности…"
                      className="w-full rounded-xl border border-hairline bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col items-start justify-between gap-4 border-t border-hairline pt-6 sm:flex-row sm:items-center">
                    <p className="text-xs text-muted-foreground">
                      Нажимая «Отправить», вы соглашаетесь с обработкой персональных данных.
                    </p>
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:gap-3"
                    >
                      Отправить заявку
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Channels */}
            <aside className="space-y-12">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  / Прямой контакт
                </p>
                <ul className="mt-6 space-y-px overflow-hidden rounded-2xl bg-hairline">
                  {channels.map((c) => (
                    <li key={c.label} className="bg-background">
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group flex items-center justify-between p-6 transition-colors hover:bg-secondary"
                      >
                        <div>
                          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                            {c.label}
                          </div>
                          <div className="mt-1 font-display text-xl font-medium tracking-tight">
                            {c.value}
                          </div>
                        </div>
                        <span aria-hidden className="text-xl text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-foreground">
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  / Где мы
                </p>
                <div className="mt-6 rounded-2xl border border-hairline p-6">
                  <div className="font-display text-xl font-medium tracking-tight">Алматы</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Работаем по всему Казахстану и удалённо
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-accent p-6">
                <div className="font-display text-2xl font-medium leading-snug tracking-tight text-accent-foreground">
                  Среднее время ответа — 3 часа в рабочее время.
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
