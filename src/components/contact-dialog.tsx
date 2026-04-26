import { useState, type FormEvent, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { formatKzPhone, isValidKzPhone } from "@/lib/phone-mask";

interface ContactDialogProps {
  trigger: ReactNode;
  title?: string;
  description?: string;
}

export function ContactDialog({
  trigger,
  title = "Обсудить проект",
  description = "Оставьте контакты — свяжемся в течение рабочего дня.",
}: ContactDialogProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7 (");
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

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
    if (!name.trim()) return;
    setSubmitted(true);
  }

  function reset() {
    setOpen(false);
    setTimeout(() => {
      setName("");
      setPhone("+7 (");
      setPhoneError(null);
      setSubmitted(false);
    }, 200);
  }

  return (
    <Dialog open={open} onOpenChange={(v) => (v ? setOpen(true) : reset())}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {submitted ? (
          <div className="py-4">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <span className="text-lg">✓</span>
            </div>
            <DialogTitle className="font-display text-2xl font-medium tracking-tight">
              Заявка отправлена
            </DialogTitle>
            <DialogDescription className="mt-2 text-muted-foreground">
              Свяжемся с вами в ближайшее время.
            </DialogDescription>
            <button
              type="button"
              onClick={reset}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:gap-3"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl font-medium tracking-tight">
                {title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {description}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-2 space-y-5">
              <div>
                <label
                  htmlFor="cd-name"
                  className="mb-2 block text-xs font-mono uppercase tracking-widest text-muted-foreground"
                >
                  Имя
                </label>
                <input
                  id="cd-name"
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
                  htmlFor="cd-phone"
                  className="mb-2 block text-xs font-mono uppercase tracking-widest text-muted-foreground"
                >
                  Телефон
                </label>
                <input
                  id="cd-phone"
                  name="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={handlePhoneChange}
                  onFocus={() => {
                    if (!phone) setPhone("+7 (");
                  }}
                  placeholder="+7 777 000 0000"
                  inputMode="tel"
                  className="w-full rounded-xl border border-hairline bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
                />
                {phoneError && (
                  <p className="mt-2 text-xs text-destructive">{phoneError}</p>
                )}
              </div>

              <div className="flex flex-col items-start justify-between gap-3 border-t border-hairline pt-5 sm:flex-row sm:items-center">
                <p className="text-xs text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с обработкой данных.
                </p>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:gap-3"
                >
                  Отправить
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
