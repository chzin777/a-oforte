import Image from "next/image";

// ─────────────────────────────────────────────────────────────
// EDITE AQUI: nome da empresa, telefone (formato internacional,
// só números) e cidade. O link do WhatsApp é montado automático.
// ─────────────────────────────────────────────────────────────
const BRAND = "Aço Forte";
const BRAND_FULL = "Aço Forte Serralheria";
const PHONE = "5599999999999"; // 55 + DDD + número, sem espaços
const CITY = "São Paulo e região";
const WPP_MSG = "Olá! Vi o site e quero um orçamento.";
const WPP_LINK = `https://wa.me/${PHONE}?text=${encodeURIComponent(WPP_MSG)}`;

const NAV = [
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Trabalhos" },
  { href: "#processo", label: "Como funciona" },
  { href: "#contato", label: "Contato" },
];

const GALLERY = [
  { src: "/galeria/portao-1.jpeg", label: "Portão basculante moderno" },
  { src: "/galeria/portao-2.jpeg", label: "Reforma de portão — antes e depois" },
  { src: "/galeria/portao-3.png", label: "Portão de alumínio ripado" },
  { src: "/galeria/portao-4.webp", label: "Portão basculante branco" },
  { src: "/galeria/telhado-1.jpeg", label: "Reforma de estrutura de telhado" },
  { src: "/galeria/telhado-2.jpeg", label: "Telhado de telha cerâmica" },
];

const SERVICES = [
  {
    title: "Conserto de portões",
    desc: "Portão emperrado, fora do trilho ou fazendo barulho? Diagnóstico e reparo no mesmo dia.",
    icon: WrenchIcon,
  },
  {
    title: "Troca de roldanas",
    desc: "Roldanas gastas trocadas por peças reforçadas. Seu portão volta a deslizar liso.",
    icon: GearIcon,
  },
  {
    title: "Remoção de ferrugem e podre",
    desc: "Tiramos a parte podre, tratamos o metal e devolvemos a resistência da estrutura.",
    icon: ShieldIcon,
  },
  {
    title: "Fabricação de portões",
    desc: "Portões sob medida — basculante, deslizante ou social. Do desenho à instalação.",
    icon: GateIcon,
  },
  {
    title: "Reforma de telhados",
    desc: "Estrutura metálica, telhas e calhas. Conserto de goteiras e telhados novos.",
    icon: RoofIcon,
  },
  {
    title: "Estruturas e cestas de lixo",
    desc: "Cestas de lixo, grades, corrimãos e estruturas metálicas feitas para durar.",
    icon: BoxIcon,
  },
];

const STEPS = [
  {
    n: "01",
    title: "Você chama no WhatsApp",
    desc: "Manda foto do portão ou descreve o problema. Resposta rápida.",
  },
  {
    n: "02",
    title: "Orçamento sem enrolação",
    desc: "Avaliação honesta: dá pra consertar ou compensa fabricar novo.",
  },
  {
    n: "03",
    title: "Serviço feito e garantido",
    desc: "Trabalho limpo, no prazo combinado, com garantia na mão de obra.",
  },
];

const REASONS = [
  "Atendimento no mesmo dia para emergências",
  "Peças reforçadas, não as mais baratas",
  "Orçamento claro antes de começar",
  "Garantia na mão de obra",
  "Conserto, fabricação e instalação no mesmo lugar",
  "Mais de 10 anos trabalhando com metal",
];

const STATS = [
  { value: "10+", label: "anos de oficina" },
  { value: "1.200+", label: "portões atendidos" },
  { value: "24h", label: "resposta no WhatsApp" },
  { value: "100%", label: "garantia na mão de obra" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Services />
        <Gallery />
        <Process />
        <Reasons />
        <CTA />
      </main>
      <Footer />
      <WppFloat />
    </>
  );
}

/* ────────────────────────── Header ────────────────────────── */
function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center gap-2 font-extrabold tracking-tight">
          <LogoMark />
          <span className="text-lg">
            {BRAND}
            <span className="text-amber"> Serralheria</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="text-sm font-medium text-steel transition hover:text-white"
            >
              {i.label}
            </a>
          ))}
        </nav>
        <a
          href={WPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-wpp px-4 py-2 text-sm font-bold text-white shadow-lg shadow-wpp/20 transition hover:brightness-110"
        >
          <WppIcon className="h-4 w-4" />
          Orçamento
        </a>
      </div>
    </header>
  );
}

/* ─────────────────────────── Hero ─────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* glow */}
      <div className="pointer-events-none absolute -top-32 right-0 h-[480px] w-[480px] rounded-full bg-amber/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-amber/10 blur-[120px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3 py-1 text-xs font-semibold text-amber-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            Conserto · Fabricação · Instalação
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Portões que
            <br />
            <span className="text-amber">não te deixam na mão</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-steel">
            Trocamos roldanas, tiramos a ferrugem e o podre, fabricamos portões
            novos e ainda reformamos seu telhado. Em {CITY}.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={WPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-wpp px-6 py-3.5 font-bold text-white shadow-lg shadow-wpp/30 transition hover:brightness-110"
            >
              <WppIcon className="h-5 w-5" />
              Chamar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-bold text-white transition hover:bg-white/5"
            >
              Ver serviços
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-steel">
            <span className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-amber" /> Orçamento grátis
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-amber" /> Garantia na mão de obra
            </span>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <GateHero />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Stats ────────────────────────── */
function Stats() {
  return (
    <section className="border-y border-white/5 bg-ink-soft">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-5 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="py-8 text-center">
            <div className="text-3xl font-extrabold text-amber md:text-4xl">
              {s.value}
            </div>
            <div className="mt-1 text-sm text-steel">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── Services ───────────────────────── */
function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHead
        kicker="O que fazemos"
        title="Tudo que envolve metal, a gente resolve"
        sub="Do parafuso solto ao portão novo na entrada da sua casa."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="group rounded-2xl border border-white/5 bg-ink-card p-6 transition hover:-translate-y-1 hover:border-amber/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber/10 text-amber transition group-hover:bg-amber group-hover:text-ink">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ───────────────────────── Gallery ────────────────────────── */
function Gallery() {
  return (
    <section id="galeria" className="border-y border-white/5 bg-ink-soft">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHead
          kicker="Nossos trabalhos"
          title="Portões que já saíram da oficina"
          sub="Modelos variados — do clássico de ferro ao deslizante moderno. O seu pode ser o próximo."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {GALLERY.map((g, i) => (
            <figure
              key={g.src}
              className={`group relative overflow-hidden rounded-2xl border border-white/5 ${
                i === 0 ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`relative w-full ${i === 0 ? "aspect-square md:aspect-[4/5]" : "aspect-square"}`}>
                <Image
                  src={g.src}
                  alt={g.label}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 p-4 text-sm font-semibold text-white">
                {g.label}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={WPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-wpp px-6 py-3.5 font-bold text-white shadow-lg shadow-wpp/30 transition hover:brightness-110"
          >
            <WppIcon className="h-5 w-5" />
            Quero um igual
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Process ────────────────────────── */
function Process() {
  return (
    <section id="processo" className="border-y border-white/5 bg-ink-soft">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHead
          kicker="Como funciona"
          title="Simples como tem que ser"
          sub="Sem visita marcada com semanas de antecedência. Você chama, a gente resolve."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-white/5 bg-ink-card p-7">
              <span className="text-5xl font-extrabold text-white">{s.n}</span>
              <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Reasons ────────────────────────── */
function Reasons() {
  return (
    <section id="porque" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <SectionHead
            align="left"
            kicker="Por que nós"
            title="Trabalho de quem entende de metal"
            sub="Não é improviso. É oficina, ferramenta certa e peça que aguenta."
          />
          <a
            href={WPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3.5 font-bold text-ink shadow-lg shadow-amber/20 transition hover:brightness-105"
          >
            Pedir orçamento agora
          </a>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {REASONS.map((r) => (
            <li
              key={r}
              className="flex items-start gap-3 rounded-xl border border-white/5 bg-ink-card p-4 text-sm"
            >
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─────────────────────────── CTA ──────────────────────────── */
function CTA() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-5 pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-amber/20 bg-gradient-to-br from-ink-card to-ink-soft p-10 text-center md:p-16">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber/20 blur-[100px]" />
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          Seu portão tá precisando de uma olhada?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-steel">
          Manda uma foto no WhatsApp e recebe o orçamento sem compromisso.
          Atendemos {CITY}.
        </p>
        <a
          href={WPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-wpp px-8 py-4 text-lg font-bold text-white shadow-lg shadow-wpp/30 transition hover:brightness-110"
        >
          <WppIcon className="h-5 w-5" />
          Falar com a {BRAND} agora
        </a>
      </div>
    </section>
  );
}

/* ─────────────────────────── Footer ───────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-soft">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-steel md:flex-row">
        <div className="flex items-center gap-2 font-bold text-white">
          <LogoMark />
          {BRAND_FULL}
        </div>
        <p>
          © {BRAND_FULL} · {CITY}
        </p>
        <a
          href={WPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-semibold text-wpp hover:underline"
        >
          <WppIcon className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </footer>
  );
}

/* ─────────────────────── WhatsApp float ───────────────────── */
function WppFloat() {
  return (
    <a
      href={WPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-wpp text-white shadow-xl shadow-wpp/40 transition hover:scale-105"
    >
      <WppIcon className="h-7 w-7" />
    </a>
  );
}

/* ─────────────────────── Shared bits ──────────────────────── */
function SectionHead({
  kicker,
  title,
  sub,
  align = "center",
}: {
  kicker: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <span className="text-sm font-bold uppercase tracking-widest text-amber">
        {kicker}
      </span>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-steel">{sub}</p>}
    </div>
  );
}

/* ──────────────────────── Gate hero photo ─────────────────── */
function GateHero() {
  return (
    <div className="relative w-full max-w-md">
      {/* photo card */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-amber/10">
        <Image
          src="/portao.jpg"
          alt="Portão de metal feito sob medida"
          fill
          priority
          sizes="(max-width: 768px) 90vw, 420px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
      </div>

      {/* floating badge */}
      <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-amber/30 bg-ink-card/90 px-5 py-4 shadow-xl backdrop-blur">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber text-ink">
          <CheckIcon className="h-6 w-6" />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-extrabold">Feito sob medida</p>
          <p className="text-xs text-steel">Conserto · Fabricação · Instalação</p>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── Icons ──────────────────────────── */
type IconProps = { className?: string };

function LogoMark() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber text-ink">
      <GateIcon className="h-5 w-5" />
    </span>
  );
}

function GateIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 20V8l9-4 9 4v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 20V9M12 20V7M17 20V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M2 20h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function WrenchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2.4-.6-.6-2.4 2.3-2.3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GearIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RoofIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M2 11 12 4l10 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10v9h14v-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 19v-5h6v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BoxIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 8h14l-1 12H6L5 8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 8V5h6v3M9 12v4M15 12v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="m5 12 5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.3-1.9 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5-.2-.2-1.3-1.7-1.3-3.2s.8-2.3 1.1-2.6c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .7.5l.9 2.1c.1.2.1.4 0 .5l-.4.6-.4.4c-.2.2-.3.3-.1.6.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l.8-1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.3.1.2.1.8-.1 1.4Z" />
    </svg>
  );
}
