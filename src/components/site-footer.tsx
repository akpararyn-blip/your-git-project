import { Link } from "@tanstack/react-router";
import logo from "@/assets/aryn-logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2">
            <Link to="/" className="flex items-center" aria-label="ARYN TEAM — на главную">
              <img src={logo} alt="ARYN TEAM" className="h-10 w-auto" loading="lazy" />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Снимаем оригинальный контент, который смотрится дорого. Performance-маркетинг
              и видеопродакшен с прозрачной аналитикой.
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
              <li>
                <a href="tel:+77074842108" className="hover:text-foreground">
                  +7 707 484 2108
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/arynbg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  Telegram: @arynbg
                </a>
              </li>
              <li>Алматы</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} ARYN TEAM. Все права защищены.</p>
          <p className="font-mono">built for measurable growth</p>
        </div>
      </div>
    </footer>
  );
}
