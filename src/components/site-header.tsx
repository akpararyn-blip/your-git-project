import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="group flex items-center gap-2">
          <span className="relative inline-flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-foreground" />
          </span>
          <span className="font-display text-xl font-medium tracking-tight">
            Pulse<span className="text-muted-foreground">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
          >
            Главная
          </Link>
          <Link
            to="/services"
            className="text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
          >
            Услуги
          </Link>
          <Link
            to="/contact"
            className="text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
          >
            Контакты
          </Link>
        </nav>

        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-all hover:gap-3"
        >
          Обсудить проект
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      </div>
    </header>
  );
}
