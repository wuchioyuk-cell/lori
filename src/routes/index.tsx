import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Compass,
  Sparkles,
  ShoppingBag,
  Globe2,
  Bot,
  Mail,
  Linkedin,
  Instagram,
  Briefcase,
  MapPin,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Caiyu Wu — Cross-cultural Product & Content Operator" },
      {
        name: "description",
        content:
          "Portfolio of Caiyu Wu — product operations, travel product design, content strategy, e-commerce listing, AI-assisted workflow. Based in Sapporo, Japan.",
      },
    ],
  }),
  component: Portfolio,
});

const heroTags = [
  "Product Operations",
  "Travel Product Design",
  "Content Strategy",
  "E-commerce Listing",
  "AI-assisted Workflow",
  "Multilingual Communication",
];

const services = [
  {
    icon: Compass,
    title: "Travel Product & OTA Listing",
    desc: "Route planning, product descriptions, platform listing optimization, and customer-facing copy that actually converts curious browsers into bookings.",
  },
  {
    icon: Sparkles,
    title: "Content & Social Media",
    desc: "Xiaohongshu, Instagram and Threads style content, campaign ideas, and bilingual adaptation that keeps tone and intent intact across markets.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Listing Support",
    desc: "Selling-point structures, image concept planning, and marketplace-ready listing materials for platforms like Ozon and TikTok Shop.",
  },
  {
    icon: Globe2,
    title: "Website & Brand Structure",
    desc: "Landing page architecture, service page planning, website copy, and multilingual content layout for global-facing brands.",
  },
  {
    icon: Bot,
    title: "AI Workflow Support",
    desc: "Repeatable prompt systems and AI tooling to speed up content production, research, planning, and daily operations without losing taste.",
  },
];

const projects = [
  {
    name: "Hokkaido Travel Product Planning",
    role: "Product Operator & Planner",
    did: "Designed private car tours, ski camp products, and seasonal travel routes for international travelers, building the full product brief from selling points to itinerary.",
    result:
      "Travel products went from rough internal ideas to ready-to-publish offers across Chinese and English channels.",
    tag: "Travel",
  },
  {
    name: "Japan Youth Ski Camp Campaign",
    role: "Content & Product Lead",
    did: "Crafted parent-friendly product messaging for a winter ski camp targeting Chinese-speaking families in Japan, from headline to FAQ.",
    result:
      "Created a consistent, trust-building narrative parents could share inside private group chats without further explanation.",
    tag: "Campaign",
  },
  {
    name: "E-commerce Visual Planning",
    role: "Listing & Visual Planner",
    did: "Planned marketplace listing images and selling-point structures for products on Ozon and TikTok Shop, briefing visuals end-to-end.",
    result:
      "Listings looked native to each marketplace and gave operations teams a reusable visual template.",
    tag: "E-commerce",
  },
  {
    name: "Multilingual Website Planning",
    role: "Information Architect",
    did: "Structured a tourism company website across Simplified Chinese, English, Japanese, Traditional Chinese, Vietnamese, Thai, and Spanish.",
    result:
      "One coherent site spine that respected each language while keeping the brand voice consistent.",
    tag: "Web",
  },
  {
    name: "AI-assisted Content System",
    role: "Workflow Designer",
    did: "Built repeatable prompt workflows covering content, listing copy, and visual direction for daily operations.",
    result:
      "Cut routine content drafting time meaningfully while keeping outputs on-brand and review-ready.",
    tag: "AI",
  },
];

const workingStyle = [
  "I ask the right questions before creating.",
  "I care about both business goals and user emotions.",
  "I am fast, organized, and willing to iterate.",
  "I can work across cultures and platforms.",
  "I turn unclear ideas into structured outputs.",
];

const testimonials = [
  {
    quote:
      "Caiyu is proactive, thoughtful, and very good at turning scattered ideas into practical execution.",
    who: "Project collaborator",
  },
  {
    quote:
      "Working with her feels easy because she understands both content and business needs.",
    who: "Travel industry partner",
  },
];

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden text-foreground">
      {/* ambient blobs */}
      <div className="blob top-[-8rem] left-[-6rem] size-[28rem] bg-peach" aria-hidden />
      <div className="blob top-[20%] right-[-8rem] size-[26rem] bg-sky" aria-hidden />
      <div className="blob bottom-[10%] left-[-6rem] size-[24rem] bg-blush" aria-hidden />

      <Nav />

      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Portfolios />
        <WorkingStyle />
        <Testimonials />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-border/60 px-6 py-10 text-center text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Caiyu Wu (吴采宥) · Crafted with care in Sapporo, Japan.
        </p>
      </footer>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-30 px-4 pt-4 sm:px-6 sm:pt-6">
      <nav className="glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-display font-bold">
          <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-peach to-blush text-sm text-ink shrink-0">
            C
          </span>
          <span className="text-sm sm:text-base">
            Caiyu Wu <span className="hidden text-muted-foreground sm:inline">· 吴采宥</span>
          </span>
        </a>
        <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <a
          href="#contact"
          className="rounded-full bg-ink px-4 py-2 text-xs font-semibold text-background transition-transform hover:scale-[1.03] sm:text-sm"
        >
          Let's talk
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="px-4 pt-12 pb-20 sm:px-6 sm:pt-20 sm:pb-28">
      <div className="mx-auto max-w-4xl text-center">
        <div className="glass mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <MapPin className="size-3.5" /> Based in Sapporo, Japan · Open to remote work
        </div>
        <h1 className="font-display text-4xl leading-[1.1] font-extrabold tracking-tight text-balance sm:text-6xl">
          Hi, I'm{" "}
          <span className="bg-gradient-to-br from-primary via-[oklch(0.55_0.12_30)] to-accent bg-clip-text text-transparent">
            Caiyu Wu
          </span>{" "}
          <span className="font-serif italic font-normal text-foreground/80">
            — a cross-cultural product & content operator based in Japan.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg text-pretty">
          I help brands, travel businesses, and digital projects turn ideas into clear products,
          persuasive content, and launch-ready online experiences.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#work"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03] sm:w-auto"
          >
            View My Work
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="glass-strong inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03] sm:w-auto"
          >
            Work With Me
          </a>
        </div>

        <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
          {heroTags.map((t) => (
            <li
              key={t}
              className="glass rounded-full px-3 py-1.5 text-xs font-medium text-foreground/80"
            >
              {t}
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

function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionLabel>About Me</SectionLabel>
        <h2 className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
          A warm operator who turns messy ideas into{" "}
          <span className="font-serif italic font-normal">structured execution.</span>
        </h2>

        <div className="glass-strong mt-10 rounded-3xl p-6 sm:p-10">
          <div className="space-y-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
            <p>
              I'm based in Sapporo, Japan, working as a travel product manager and operator in a
              Japanese and international environment. Chinese is my native language, and I work
              comfortably across Mandarin, English, and Japanese.
            </p>
            <p>
              My experience spans travel product planning, OTA listings, social media content,
              e-commerce visuals, website planning, and AI-assisted productivity. My strength is
              not only writing content — it's understanding the business goal behind the content,
              and shaping the delivery so that goal actually lands.
            </p>
            <p>
              People who work with me tend to describe me as warm, responsible, and proactive — good
              at seeing other people's strengths, and good at turning scattered ideas into
              structured, executable outputs.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border/60 pt-6 sm:grid-cols-4">
            {[
              ["Location", "Sapporo, JP"],
              ["Languages", "中 · EN · 日"],
              ["Role", "PM / Operator"],
              ["Mode", "Remote-ready"],
            ].map(([k, v]) => (
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

function Services() {
  return (
    <section id="services" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>What I Can Help With</SectionLabel>
        <h2 className="mx-auto max-w-2xl text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Five focused ways I plug into your team.
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="glass group rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-peach/80 to-blush/80 text-ink shadow-sm">
                <Icon className="size-5" />
              </div>
              <h3 className="font-display text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolios() {
  return (
    <section id="work" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Selected Work</SectionLabel>
        <h2 className="mx-auto max-w-2xl text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Recent projects across travel, content & commerce.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.name}
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
                  <span className="text-xs text-muted-foreground">Case 0{i + 1}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight sm:text-2xl">
                  {p.name}
                </h3>
                <div className="mt-5 space-y-3 text-sm leading-relaxed">
                  <Row label="My Role" value={p.role} />
                  <Row label="What I Did" value={p.did} />
                  <Row label="Result / Value" value={p.result} />
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
    <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-3">
      <div className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
        {label}
      </div>
      <div className="text-foreground/85">{value}</div>
    </div>
  );
}

function WorkingStyle() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionLabel>My Working Style</SectionLabel>
        <h2 className="mx-auto max-w-2xl text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
          How I show up when we work together.
        </h2>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {workingStyle.map((s, i) => (
            <li
              key={s}
              className="glass flex items-start gap-4 rounded-2xl p-5 text-foreground/85"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-peach to-blush font-display text-sm font-bold text-ink">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed sm:text-base">{s}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionLabel>Kind Words</SectionLabel>
        <h2 className="mx-auto max-w-2xl text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
          What collaborators say.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.who} className="glass-strong rounded-3xl p-7">
              <blockquote className="font-serif text-xl leading-snug italic text-foreground/90 sm:text-2xl">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
                <span className="size-2 rounded-full bg-accent" />
                {t.who}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    { icon: Mail, label: "Email", value: "wuchioyuk@gmail.com", href: "mailto:wuchioyuk@gmail.com" },
    { icon: Briefcase, label: "Upwork", value: "View profile", href: "#" },
    { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: "#" },
    { icon: Instagram, label: "Instagram", value: "@portfolio", href: "#" },
  ];

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="glass-strong relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
          <div className="blob -top-20 -right-20 size-72 bg-peach" aria-hidden />
          <div className="blob -bottom-20 -left-20 size-72 bg-sky" aria-hidden />
          <div className="relative text-center">
            <SectionLabel>Contact</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Let's build something{" "}
              <span className="font-serif italic font-normal">clear & warm</span> together.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Whether it's a travel product, a listing rebuild, a website refresh, or an AI workflow
              — I'd love to hear what you're working on.
            </p>

            <a
              href="mailto:wuchioyuk@gmail.com"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
            >
              Let's Work Together
              <ArrowUpRight className="size-4" />
            </a>

            <div className="mt-10 grid gap-3 text-left sm:grid-cols-2">
              {links.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="glass group flex items-center gap-3 rounded-2xl px-4 py-3 transition-transform hover:-translate-y-0.5"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-peach to-blush text-ink">
                    <Icon className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                      {label}
                    </div>
                    <div className="truncate text-sm font-medium">{value}</div>
                  </div>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
