import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ListChecks,
  LayoutTemplate,
  Briefcase,
  Globe2,
  Mail,
  Linkedin,
  Instagram,
  Check,
  Dumbbell,
  Heart,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { LanguageSwitcher } from "@/i18n/LanguageSwitcher";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lori — Remote Growth & Content Marketing for Small Businesses" },
      {
        name: "description",
        content:
          "Lori helps small businesses turn their services into clear websites, social content, and listing pages that customers can understand and act on. Based in Sapporo, Japan.",
      },
    ],
  }),
  component: Portfolio,
});

const serviceIcons = [ListChecks, LayoutTemplate, Briefcase, Globe2];
const contactIcons = [Mail, Briefcase, Linkedin, Instagram];
const contactHrefs = [
  "mailto:wuchioyuk@gmail.com",
  "#", // Upwork
  "#", // LinkedIn
  "#", // Instagram
];

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden text-foreground">
      <div className="blob top-[-8rem] left-[-6rem] size-[28rem] bg-peach" aria-hidden />
      <div className="blob top-[20%] right-[-8rem] size-[26rem] bg-sky" aria-hidden />
      <div className="blob bottom-[10%] left-[-6rem] size-[24rem] bg-blush" aria-hidden />

      <Nav />

      <main className="relative z-10">
        <Hero />
        <Services />
        <Portfolios />
        <WhyMe />
        <Packages />
        <About />
        <BeyondWork />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative z-10 border-t border-border/60 px-6 py-10 text-center text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Lori · {t.footer}</p>
    </footer>
  );
}

function Nav() {
  const { t } = useLanguage();
  const items = [
    { href: "#top", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#work", label: t.nav.portfolio },
    { href: "#why", label: t.nav.whyMe },
    { href: "#packages", label: t.nav.packages },
    { href: "#about", label: t.nav.about },
    { href: "#beyond", label: t.nav.beyondWork },
    { href: "#contact", label: t.nav.contact },
  ];
  return (
    <header className="sticky top-0 z-30 px-4 pt-4 sm:px-6 sm:pt-6">
      <nav className="glass mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full px-3 py-2.5 sm:px-5 sm:py-3">
        <a href="#top" className="flex items-center gap-2 font-display font-bold shrink-0">
          <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-peach to-blush text-sm text-ink shrink-0">
            L
          </span>
          <span className="text-sm sm:text-base">Lori</span>
        </a>
        <div className="hidden items-center gap-5 text-sm text-muted-foreground lg:flex">
          {items.slice(1).map((i) => (
            <a key={i.href} href={i.href} className="hover:text-foreground transition-colors">
              {i.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="hidden rounded-full bg-ink px-4 py-2 text-xs font-semibold text-background transition-transform hover:scale-[1.03] sm:inline-flex sm:text-sm"
          >
            {t.nav.cta}
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const { t } = useLanguage();
  return (
    <section id="top" className="px-4 pt-12 pb-20 sm:px-6 sm:pt-20 sm:pb-28">
      <div className="mx-auto max-w-4xl text-center">
        <div className="glass mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <MapPin className="size-3.5" /> {t.hero.locationTag}
        </div>
        <h1 className="font-display text-[2rem] leading-[1.12] font-extrabold tracking-tight text-balance sm:text-5xl md:text-6xl">
          {t.hero.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg text-pretty">
          {t.hero.subheadline}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#services"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03] sm:w-auto"
          >
            {t.hero.ctaServices}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#work"
            className="glass-strong inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03] sm:w-auto"
          >
            {t.hero.ctaWork}
          </a>
        </div>

        <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
          {t.hero.tags.map((tag) => (
            <li
              key={tag}
              className="glass rounded-full px-3 py-1.5 text-xs font-medium text-foreground/80"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
      <span className="h-px w-6 bg-primary/40" />
      {children}
      <span className="h-px w-6 bg-primary/40" />
    </div>
  );
}

function Services() {
  const { t } = useLanguage();
  return (
    <section id="services" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>{t.services.label}</SectionLabel>
        <h2 className="mx-auto max-w-2xl text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {t.services.heading}
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {t.services.items.map((s, i) => {
            const Icon = serviceIcons[i] ?? PenSquare;
            return (
              <article
                key={s.key}
                className="glass group rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-peach/80 to-blush/80 text-ink shadow-sm">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Portfolios() {
  const { t } = useLanguage();
  return (
    <section id="work" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>{t.portfolio.label}</SectionLabel>
        <h2 className="mx-auto max-w-2xl text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {t.portfolio.heading}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.portfolio.items.map((p, i) => (
            <article
              key={p.key}
              className="glass group relative overflow-hidden rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8"
            >
              <div
                className="absolute -top-16 -right-16 size-40 rounded-full opacity-50 blur-3xl"
                style={{
                  background:
                    i % 3 === 0
                      ? "var(--color-peach)"
                      : i % 3 === 1
                        ? "var(--color-sky)"
                        : "var(--color-blush)",
                }}
                aria-hidden
              />
              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-foreground/10 px-3 py-1 text-[10px] font-semibold tracking-widest uppercase">
                    {p.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {t.portfolio.caseLabel} 0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight sm:text-2xl">
                  {p.name}
                </h3>
                <div className="mt-5 space-y-3 text-sm leading-relaxed">
                  <Row label={t.portfolio.rowProblem} value={p.problem} />
                  <Row label={t.portfolio.rowDid} value={p.did} />
                  <Row label={t.portfolio.rowDeliverables} value={p.deliverables} />
                  <Row label={t.portfolio.rowResult} value={p.result} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[7rem_minmax(0,1fr)] gap-3">
      <div className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
        {label}
      </div>
      <div className="text-foreground/85">{value}</div>
    </div>
  );
}

function WhyMe() {
  const { t } = useLanguage();
  return (
    <section id="why" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionLabel>{t.whyMe.label}</SectionLabel>
        <h2 className="mx-auto max-w-2xl text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {t.whyMe.heading}
        </h2>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {t.whyMe.items.map((s, i) => (
            <li
              key={i}
              className="glass flex items-start gap-4 rounded-2xl p-5 text-foreground/85"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-peach to-blush text-ink">
                <Check className="size-4" />
              </span>
              <p className="text-sm leading-relaxed sm:text-base">{s}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Packages() {
  const { t } = useLanguage();
  return (
    <section id="packages" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>{t.packages.label}</SectionLabel>
        <h2 className="mx-auto max-w-2xl text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {t.packages.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
          {t.packages.subheading}
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {t.packages.items.map((p, i) => (
            <article
              key={p.key}
              className={`relative flex flex-col rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1 ${
                i === 1 ? "glass-strong ring-1 ring-primary/30" : "glass"
              }`}
            >
              <h3 className="font-display text-lg font-bold">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1.5">
                {/^\$|^\d/.test(p.price) && (
                  <span className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                    {t.packages.fromLabel}
                  </span>
                )}
                <span className="font-display text-3xl font-extrabold tracking-tight">
                  {p.price}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center justify-center gap-1.5 self-start rounded-full bg-ink px-4 py-2 text-xs font-semibold text-background transition-transform hover:scale-[1.03]"
              >
                {t.contact.cta}
                <ArrowUpRight className="size-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionLabel>{t.about.label}</SectionLabel>
        <h2 className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {t.about.heading}{" "}
          <span className="font-serif italic font-normal">{t.about.headingItalic}</span>
        </h2>

        <div className="glass-strong mt-10 rounded-3xl p-6 sm:p-10">
          <div className="space-y-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border/60 pt-6 sm:grid-cols-4">
            {t.about.facts.map(({ k, v }) => (
              <div key={k}>
                <div className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                  {k}
                </div>
                <div className="mt-1 text-sm font-medium">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BeyondWork() {
  const { t } = useLanguage();
  return (
    <section id="beyond" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionLabel>{t.beyondWork.label}</SectionLabel>
        <h2 className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {t.beyondWork.heading}{" "}
          <span className="font-serif italic font-normal">{t.beyondWork.headingItalic}</span>
        </h2>

        <div className="glass-strong mt-10 rounded-3xl p-6 sm:p-10">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
            <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-foreground/80">
              <Dumbbell className="size-3.5" /> Fitness
            </span>
            <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-foreground/80">
              Tennis
            </span>
            <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-foreground/80">
              Skiing
            </span>
            <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-foreground/80">
              Photography
            </span>
            <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-foreground/80">
              Sapporo Life
            </span>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
            {t.beyondWork.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-rose to-blush text-ink">
                <Heart className="size-4" />
              </span>
              <div>
                <div className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                  {t.beyondWork.xhsLabel}
                </div>
                <div className="text-sm font-medium">11.1K likes & saves</div>
              </div>
            </div>
            <a
              href={t.beyondWork.xhsUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-semibold text-background transition-transform hover:scale-[1.03]"
            >
              {t.beyondWork.xhsCta}
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="glass-strong relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
          <div className="blob -top-20 -right-20 size-72 bg-peach" aria-hidden />
          <div className="blob -bottom-20 -left-20 size-72 bg-sky" aria-hidden />
          <div className="relative text-center">
            <SectionLabel>{t.contact.label}</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
              {t.contact.heading}{" "}
              <span className="font-serif italic font-normal">{t.contact.headingItalic}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t.contact.intro}</p>

            <a
              href="mailto:wuchioyuk@gmail.com"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
            >
              {t.contact.cta}
              <ArrowUpRight className="size-4" />
            </a>

            <div className="mt-10 grid gap-3 text-left sm:grid-cols-2">
              {t.contact.links.map((link, i) => {
                const Icon = contactIcons[i] ?? Mail;
                return (
                  <a
                    key={link.label}
                    href={contactHrefs[i] ?? "#"}
                    className="glass group flex items-center gap-3 rounded-2xl px-4 py-3 transition-transform hover:-translate-y-0.5"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-peach to-blush text-ink">
                      <Icon className="size-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                        {link.label}
                      </div>
                      <div className="truncate text-sm font-medium">{link.value}</div>
                    </div>
                    <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
