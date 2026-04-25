import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-foreground" />
              <span className="font-display text-2xl font-medium tracking-tight">
                Pulse<span className="text-muted-foreground">.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Performance-маркетинг с прозрачной аналитикой. Превращаем рекламные бюджеты в
              предсказуемую выручку.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Навигация
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-foreground text-muted-foreground">Главная</Link></li>
              <li><Link to="/services" className="hover:text-foreground text-muted-foreground">Услуги</Link></li>
              <li><Link to="/contact" className="hover:text-foreground text-muted-foreground">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Контакты
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>hello@pulse.agency</li>
              <li>+7 495 000 00 00</li>
              <li>Москва · удалённо</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Pulse Agency. Все права защищены.</p>
          <p className="font-mono">v1.0 — built for measurable growth</p>
        </div>
      </div>
    </footer>
  );
}
